"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // V2 import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { careerData } from "@/constants/data";

const AUTO_CLOSE_DELAY = 4000;

export default function Career() {
    const [showForm, setShowForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);
    
    // V2 reCAPTCHA State & Ref
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const autoCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearAutoCloseTimer = () => {
        if (autoCloseTimer.current) {
            clearTimeout(autoCloseTimer.current);
            autoCloseTimer.current = null;
        }
    };

    // Clean up the timer if the component unmounts
    useEffect(() => {
        return () => clearAutoCloseTimer();
    }, []);

    const openForm = (jobTitle: string) => {
        clearAutoCloseTimer();
        setSelectedJob(jobTitle);
        setSuccessMessage("");
        setErrorMessage("");
        setIsSubmitting(false);
        setShowForm(true);
    };

    const closeForm = () => {
        clearAutoCloseTimer();
        setShowForm(false);
        setSuccessMessage("");
        setErrorMessage("");
        setIsSubmitting(false);
        
        // Reset captcha when closing
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
        setRecaptchaToken(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) {
            setErrorMessage("Form not found. Please try again.");
            return;
        }

        // V2 Checkbox Validation
        if (!recaptchaToken) {
            setErrorMessage("Please check the 'I'm not a robot' box.");
            return;
        }

        const formData = new FormData(form);
        formData.append("jobTitle", selectedJob);
        formData.append("recaptchaToken", recaptchaToken); // Append V2 Token

        // Clear previous messages and any pending auto‑close timer
        clearAutoCloseTimer();
        setSuccessMessage("");
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/career", {
                method: "POST",
                body: formData,
            });

            let result: { message?: string } = {};
            try {
                result = await response.json();
            } catch {
                result = { message: "Unexpected server response." };
            }

            if (!response.ok) {
                throw new Error(
                    result.message || "Unable to submit your application."
                );
            }

            setSuccessMessage(
                result.message ||
                "Your application has been submitted successfully!"
            );

            if (form.isConnected) {
                form.reset();
            }
            
            // Reset the captcha
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
            setRecaptchaToken(null);

            // ⏱ Auto‑close the modal after 4 seconds
            autoCloseTimer.current = setTimeout(() => {
                setShowForm(false);
                setSuccessMessage("");
                setErrorMessage("");
                autoCloseTimer.current = null;
            }, AUTO_CLOSE_DELAY);
            
        } catch (error) {
            let message =
                "Unable to submit your application. Please try again.";

            if (error instanceof Error) {
                if (error.message === "Failed to fetch") {
                    message =
                        "Network error. Please check your internet connection and try again.";
                } else if (error.message) {
                    message = error.message;
                }
            }

            // ❌ Show error message BELOW the submit button
            setErrorMessage(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ========== Breadcrumb Start Section ========== */}
            <div
                className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
                data-background="/assets/images/banner/career_banner.png"
                style={{
                    backgroundImage: "url('/assets/images/banner/career_banner.png')",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="tp-breadcrumb-content text-center ">
                                <h3 className="tp-breadcrumb-title tp-char-animation text-white">
                                    Careers
                                </h3>

                                <div className="tp-breadcrumb-list mb-25 ">
                                    <span className="text-white">
                                        <a href="/">Home</a>
                                    </span>

                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">
                                        <a href="/contact">Contact</a>
                                    </span>
                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">Careers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Breadcrumb End Section ========== */}

            <section
                className="tp-experience-area pt-80 pb-80  "
                data-bg-color="#f2f2f2"
                style={{ backgroundColor: "#f2f2f2" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <div className="md-section-content-wrapper mb-20 ">
                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">
                                        Careers
                                    </h3>
                                </div>
                                <p
                                    className=" fs-20 tp_fade_anim"
                                    style={{
                                        textAlign: "center",
                                        display: "block",
                                        width: "100%",
                                        maxWidth: "1000px",
                                        margin: "0 auto",
                                        padding: "0 15px",
                                    }}
                                >
                                    Along way, we have been ranked among the most best
                                    workplace in terms of managing. publishing and
                                    delivering. Our source with almost 10 years of niche
                                    experience, comprises with experts and creative minds
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Vision, Mission, Approach & Values Start ========== */}
            <section className="neo-section career  pb-80">
                <div className="container container-1424">
                    <div className="card-grid ">
                        <div className="neo-card  ">
                            <h3>TEAMWORK</h3>
                            <p>
                                Working together is paramount to our success. We encourage
                                diversity of opinion and trust.
                            </p>
                        </div>

                        <div className="neo-card">
                            <h3>RESPECT</h3>
                            <p>
                                Treat all employees, vendors &amp; partners with respect. We
                                thrive on transparency &amp; honesty.
                            </p>
                        </div>

                        <div className="neo-card">
                            <h3>PASSION</h3>
                            <p>
                                We are passionate about the success of our employees, our
                                partners and our products.
                            </p>
                        </div>

                        <div className="neo-card">
                            <h3>INNOVATION</h3>
                            <p>
                                We are passionate about the success of our employees, our
                                partners and our products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== Vision, Mission, Approach & Values End ========== */}

            <section
                className="tp-service-area tp-service-space pt-80 pb-80 "
                style={{ background: "#8C3084" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <div className="md-section-content-wrapper mb-40">
                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-white">
                                        Join Team Proactii Media LLP !{" "}
                                        <br />
                                        <span style={{ color: "#0098C6" }}>
                                            Current Openings
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cr-service-wrap">
                    <div className="container-fluid p-0">
                        <div className="row gx-0">
                            <div className="col-md-12">
                                {careerData.map((career, index) => (
                                    <div
                                        className="cr-service-item p-relative"
                                        key={career.id}
                                    >
                                        <div className="row gx-0 align-items-center">
                                            <div className="col-lg-4 col-md-12">
                                                <div className="cr-service-content-left d-flex align-items-center sm-mt-10 ">
                                                    <span className="me-3 sm-mb-15 d-inline-block">
                                                        ({String(index + 1).padStart(2, "0")})
                                                    </span>

                                                    <div>
                                                        <h4 className="cr-service-title-sm mb-1 sm-mt-10">
                                                            <a href={career.link}>
                                                                {career.title}
                                                            </a>
                                                        </h4>

                                                        <p className="mb-1 career-job-type">
                                                            {career.jobType}
                                                        </p>

                                                        <p className="mb-2 d-flex align-items-center ">
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                aria-hidden="true"
                                                                className="me-1 career-location-icon"
                                                            >
                                                                <path
                                                                    d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <circle
                                                                    cx="12"
                                                                    cy="10"
                                                                    r="2.5"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                />
                                                            </svg>

                                                            <span>{career.location}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12 sm-mt-10 sm-mb-15">
                                                <div className="cr-service-content-right">
                                                    <p className="mb-0 mr-15 text-justify">
                                                        {career.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-12 sm-mt-10">
                                                <div className="tp-blog-masonry-btn read-more-hover">
                                                    <button
                                                        type="button"
                                                        className="people-special-link bg-red"
                                                        onClick={() =>
                                                            openForm(career.title)
                                                        }
                                                        style={{
                                                            border: "none",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Read more
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showForm && (
                <div className="career-form-overlay" onClick={closeForm}>
                    <div
                        className="career-form-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="career-form-close"
                            onClick={closeForm}
                            aria-label="Close form"
                        >
                            &times;
                        </button>

                        <h3 className="mb-25 fw-bold underline" style={{ color: "#0098C6" }}>Apply for a Job</h3>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className=" mb-14">
                                    <label>Job Position</label>
                                    <input
                                        type="text"
                                        value={selectedJob}
                                        readOnly
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-20">
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>


                                <div className="col-12 col-lg-6 mb-20">
                                    <label>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                        maxLength={100}
                                        pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}"
                                        title="Please enter a valid email address"
                                    />
                                </div>



                                <div className="col-12 col-lg-6 mb-20">
                                    <label>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Enter 10 digit mobile number"
                                        required
                                        maxLength={10}
                                        minLength={10}
                                        inputMode="numeric"
                                        pattern="[6-9][0-9]{9}"
                                        title="Please enter a valid 10-digit mobile number"
                                        onInput={(e) => {
                                            e.currentTarget.value = e.currentTarget.value
                                                .replace(/\D/g, "")
                                                .slice(0, 10);
                                        }}
                                    />
                                </div>


                                <div className="col-12 col-lg-6 mb-20">
                                    <label>Experience *</label>
                                    <select
                                        name="experience"
                                        className="form-control"
                                        required
                                        defaultValue=""
                                        style={{ minHeight: "50px" }}
                                    >
                                        <option value="" disabled>
                                            Select experience
                                        </option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="0-1 Years">0–1 Years</option>
                                        <option value="1-3 Years">1–3 Years</option>
                                        <option value="3-5 Years">3–5 Years</option>
                                        <option value="5+ Years">5+ Years</option>
                                    </select>
                                </div>

                                <div className="mb-25">
                                    <label>Upload Resume (PDF/DOC/DOCX) *</label>
                                    <input
                                        type="file"
                                        name="resume"
                                        className="form-control"
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                </div>

                                {/* V2 reCAPTCHA Checkbox */}
                                <div className="mb-20">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                                        onChange={(token) => setRecaptchaToken(token)}
                                    />
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="people-special-link bg-red"
                                disabled={isSubmitting}
                                style={{
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting
                                        ? "not-allowed"
                                        : "pointer",
                                }}
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Submit Application"}
                            </button>

                            {successMessage && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    style={{
                                        marginTop: "16px",
                                        padding: "12px 16px",
                                        borderRadius: "6px",
                                        background: "#e7f7ee",
                                        border: "1px solid #28a745",
                                        borderLeft: "4px solid #28a745",
                                        color: "#1a6b34",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        fontWeight: "600",
                                    }}
                                >
                                    ✅ {successMessage}
                                </div>
                            )}

                            {errorMessage && (
                                <div
                                    role="alert"
                                    aria-live="assertive"
                                    style={{
                                        marginTop: "16px",
                                        padding: "12px 16px",
                                        borderRadius: "6px",
                                        background: "#fdecec",
                                        border: "1px solid #e80028",
                                        borderLeft: "4px solid #e80028",
                                        color: "#a11226",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    ⚠️ {errorMessage}
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            )}

            <div
                className="text-center pt-40 pb-40"
                style={{ background: "#D16F2D" }}
            >
                <p className="fw-bold text-black fs-5">
                    We are always on the lookout for talented folk to join our team.
                    Follow us on{" "}
                    <Link
                        href="https://www.linkedin.com/company/proactii-media/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-hover"
                        style={{ color: "#fff", fontWeight: "600" }}
                    >
                        LinkedIn
                    </Link>
                </p>
            </div>
        </>
    );
}