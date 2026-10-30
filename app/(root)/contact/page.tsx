"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const SUCCESS_MESSAGE_DURATION = 4000; 

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // reCAPTCHA v2 State
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSuccessTimer = () => {
    if (successTimer.current) {
      clearTimeout(successTimer.current);
      successTimer.current = null;
    }
  };

  useEffect(() => {
    return () => clearSuccessTimer();
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    const updatedValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    clearSuccessTimer();
    setFormMessage("");
    setMessageType("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    clearSuccessTimer();

    // Required field validation
    if (!name || !email || !phone || !subject || !message) {
      setMessageType("error");
      setFormMessage("Please fill in all five required fields.");
      return;
    }

    if (name.length < 2 || name.length > 100) {
      setMessageType("error");
      setFormMessage("Name must contain between 2 and 100 characters.");
      return;
    }

    if (email.length > 254) {
      setMessageType("error");
      setFormMessage("Email address is too long.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessageType("error");
      setFormMessage("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessageType("error");
      setFormMessage("Phone number must contain exactly 10 digits.");
      return;
    }

    if (subject.length > 200 || message.length > 5000) {
      setMessageType("error");
      setFormMessage("Please check the length of your entered details.");
      return;
    }

    // V2 Checkbox validation
    if (!recaptchaToken) {
      setMessageType("error");
      setFormMessage("Please check the 'I'm not a robot' box.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFormMessage("");
      setMessageType("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          recaptchaToken, // Sending v2 token
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message. Please try again."
        );
      }

      setMessageType("success");
      setFormMessage(
        result.message || "Your message has been sent successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset the checkbox after success
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);

      successTimer.current = setTimeout(() => {
        setFormMessage("");
        setMessageType("");
        successTimer.current = null;
      }, SUCCESS_MESSAGE_DURATION);
    } catch (error) {
      setMessageType("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
        data-background="/assets/images/banner/contact.png"
        style={{
          backgroundImage: "url('/assets/images/banner/contact.png')",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="tp-breadcrumb-content text-center">
                <h3 className="tp-breadcrumb-title tp-char-animation text-white">
                  Contact us
                </h3>

                <div className="tp-breadcrumb-list mb-25">
                  <span className="text-white">
                    <a href="/">Home</a>
                  </span>

                  <span className="dvdr text-white">
                    <i>|</i>
                  </span>

                  <span className="text-white">Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact information cards */}
      <section className="md-process-area md-process-space tp-radius-20 pt-80 pb-80 p-relative z-index-3 include-bg fix">
        <div className="container container-1424">
          <div className="md-process-badge-box">
            <div className="row gx-30 justify-content-center justify-content-md-start ">
              {/* Office Address */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-10 d-flex pb-20 pb-lg-0">
                <div
                  className="md-process-badge-item text-center mb-20 tp_fade_anim proactii-badge w-100 h-100 d-flex flex-column responsive-badge-padding"
                  data-delay="0.2"
                  style={{ background: "#0098C6" }}
                >
                  <div className="pt-15 pb-10 d-flex justify-content-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{ width: "80px", height: "80px", background: "#fff" }}
                    >
                      <img
                        src="/assets/images/address.gif"
                        alt="Office Address"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="md-process-badge-content">
                    <h4
                      className="font"
                      style={{ fontWeight: "bold", color: "#fff" }}
                    >
                      Office Address
                    </h4>
                    <p style={{ color: "#fff" }}>
                      206-A, Platinum Commercial Center, Via Char Rasta Rd, opp.
                      VIA Ground, GIDC, Vapi, Gujarat 396195
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-10 d-flex pb-20 pb-lg-0">
                <div
                  className="md-process-badge-item text-center mb-20 tp_fade_anim proactii-badge w-100 h-100 d-flex flex-column responsive-badge-padding"
                  data-delay="0.2"
                  style={{ background: "#0098C6" }}
                >
                  <div className="pt-15 pb-10 d-flex justify-content-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{ width: "80px", height: "80px", background: "#fff" }}
                    >
                      <img
                        src="/assets/images/phone.gif"
                        alt="Phone"
                        style={{ width: "70px", height: "70px" }}
                      />
                    </div>
                  </div>

                  <div className="md-process-badge-content">
                    <h4
                      className="font"
                      style={{ fontWeight: "bold", color: "#fff" }}
                    >
                      Phone
                    </h4>
                    <p style={{ color: "#fff", fontWeight: "bold" }}>
                      099247 03447
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-10 d-flex pb-20 pb-lg-0">
                <div
                  className="md-process-badge-item text-center mb-20 tp_fade_anim proactii-badge w-100 h-100 d-flex flex-column responsive-badge-padding"
                  data-delay="0.2"
                  style={{ background: "#0098C6" }}
                >
                  <div className="pt-15 pb-10 d-flex justify-content-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{ width: "90px", height: "90px", background: "#fff" }}
                    >
                      <img
                        src="/assets/images/email.gif"
                        alt="Email"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  </div>

                  <div className="md-process-badge-content">
                    <h4
                      className="font"
                      style={{ fontWeight: "bold", color: "#fff" }}
                    >
                      Email
                    </h4>
                    <p style={{ color: "#fff", fontWeight: "bold" }}>
                      mail@proactii.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <div id="down" className="tp-contact-us-form-ptb">
        <div className="container container-1424">
          <div className="tp-contact-us-form-wrapper">
            <div
              className="mb-20 md-section-content-wrapper text-center"
              style={{ paddingTop: "4%" }}
            >
              <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">
                We run all kinds of IT services that vow your{" "}
                <span style={{ color: "#0098C6" }}>success</span>
              </h3>
            </div>

            <p
              className="fs-20 tp_fade_anim"
              style={{
                textAlign: "center",
                display: "block",
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "0 15px",
              }}
            >
              We&apos;d love to discuss how we can help you streamline your
              business with Proactii Media LLP Managed Service suite. Contact
              us for a no-obligation conversation. A member of our team will
              get in touch with you within a few business hours.
            </p>

            <div className="row pt-80 pb-80">
              {/* Map */}
              <div className="col-lg-6">
                <div
                  className="tp-contact-us-map p-relative pr-40 tp_fade_anim"
                  data-fade-from="left"
                >
                  <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                      <span>
                        <img
                          src="/assets/img/contact/map-icon.svg"
                          alt="Map location"
                        />
                      </span>
                    </div>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.58387291103!2d72.9209984743684!3d20.36588301021734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf31da8d5677%3A0x4402d33825c9b406!2sProactii!5e1!3m2!1sen!2sin!4v1791631003045!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0, maxWidth: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Proactii Office Location"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="col-lg-6">
                <div
                  className="tp-contact-us-wrap tp_fade_anim"
                  data-fade-from="right"
                  data-ease="bounce"
                >
                  <h3 className="tp-contact-us-title mb-55">
                    Send a Message
                  </h3>

                  <form id="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="tp-contact-form-input mb-20">
                          <label htmlFor="contact-name">Full name*</label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            maxLength={100}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="tp-contact-form-input mb-20">
                          <label htmlFor="contact-email">Email address*</label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            maxLength={254}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="tp-contact-form-input mb-20">
                          <label htmlFor="contact-phone">Phone number*</label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            value={formData.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                            maxLength={10}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="tp-contact-form-input mb-20">
                          <label htmlFor="contact-subject">Subject*</label>
                          <input
                            id="contact-subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            maxLength={200}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="tp-contact-form-input mb-20">
                          <label htmlFor="contact-message">
                            How Can We Help You*
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={5000}
                            rows={5}
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* 👇 reCAPTCHA v2 Checkbox 👇 */}
                        <div className="mb-20">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                            onChange={(token) => setRecaptchaToken(token)}
                          />
                        </div>

                        <div className="tp-contact-form-btn">
                          <button
                            className="w-100"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <span>
                              <span className="text-1">
                                {isSubmitting
                                  ? "Sending Message..."
                                  : "Send Message"}
                              </span>
                            </span>
                          </button>

                          {formMessage && (
                            <p
                              className="ajax-response"
                              role="status"
                              aria-live="polite"
                              style={{
                                color:
                                  messageType === "success"
                                    ? "#198754"
                                    : "#d71920",
                                fontWeight: 600,
                                textAlign: "center",
                                marginTop: "15px",
                              }}
                            >
                              {formMessage}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}