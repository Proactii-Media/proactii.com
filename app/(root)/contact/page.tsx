

"use client";




import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Contact() {


    return (
        <>
            {/* ========== Breadcrumb Start Section ========== */}
           
           
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
                            <div className="tp-breadcrumb-content text-center ">
                                <h3 className="tp-breadcrumb-title tp-char-animation text-white">
                                    Contact us
                                </h3>

                                <div className="tp-breadcrumb-list mb-25 ">
                                    <span className="text-white">
                                        <a href="/">Home</a>
                                    </span>

                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">Contact us</span>
                                </div>

                                <div className="tp-breadcrumb-scrolldown smooth">
                                    <a href="#about">
                                        <span>
                                            <svg
                                                width="16"
                                                height="9"
                                                viewBox="0 0 16 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L8 8L15 1"
                                                    stroke="#111013"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Breadcrumb End Section ========== */}

           <section className="md-process-area md-process-space tp-radius-20 pt-80 pb-80 p-relative z-index-3 include-bg fix">
    <div className="container container-1424">
        <div className="md-process-badge-box">
            <div className="row gx-30">

                {/* Card 1: Office Address */}
                <div className="col-xl-4 col-md-6 col-10 d-flex">
                    <div
                        className="md-process-badge-item text-center mb-20 tp_fade_anim proactii-badge w-100 h-100 d-flex flex-column"
                        data-delay="0.2"
                        style={{ background: "#0098C6" }}
                    >
                        {/* Icon Section */}
                        <div className="pt-15 pb-10 d-flex justify-content-center">
                            <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                    width: "70px",
                                    height: "70px",
                                    background: "#fff",
                                }}
                            >
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0098C6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                        </div>

                        <div className="md-process-badge-content">
                            <h4 className="font" style={{ fontWeight: "bold", color: "#fff" }}>
                                Office Address
                            </h4>
                            <p style={{ color: "#fff" }}>
                                206-A, Platinum Commercial Center, Via Char Rasta Rd,
                                opp. VIA Ground, GIDC, Vapi, Gujarat 396195
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Phone */}
                <div className="col-xl-4 col-md-6 col-10 d-flex">
                    <div
                        className="md-process-badge-item text-center mb-20 tp_fade_anim proactii-badge w-100 h-100 d-flex flex-column"
                        data-delay="0.2"
                        style={{ background: "#0098C6" }}
                    >
                        {/* Icon Section */}
                        <div className="pt-15 pb-10 d-flex justify-content-center">
                            <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                    width: "70px",
                                    height: "70px",
                                    background: "#fff",
                                }}
                            >
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0098C6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="md-process-badge-content">
                            <h4 className="font" style={{ fontWeight: "bold", color: "#fff" }}>
                                Phone
                            </h4>
                            <p style={{ color: "#fff", fontWeight: "bold" }}>
                                099247 03447
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3: Email */}
                <div className="col-xl-4 col-md-6 col-10 d-flex">
                    <div
                        className="md-process-badge-item text-center mb-20 tp_fade_anim proactii-badge w-100 h-100 d-flex flex-column"
                        data-delay="0.2"
                        style={{ background: "#0098C6" }}
                    >
                        {/* Icon Section */}
                        <div className="pt-15 pb-10 d-flex justify-content-center">
                            <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                    width: "70px",
                                    height: "70px",
                                    background: "#fff",
                                }}
                            >
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0098C6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div className="md-process-badge-content">
                            <h4 className="font" style={{ fontWeight: "bold", color: "#fff" }}>
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







            <div id="down" className="tp-contact-us-form-ptb  pb-160">
                <div className="container container-1424">
                    <div className="tp-contact-us-form-wrapper">
                        <div className="mb-20 md-section-content-wrapper text-center  " style={{ paddingTop: "4%" }}>

                            <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">We run all kinds of IT services that vow your <span style={{ color: "#0098C6" }}>success</span></h3>
                        </div>
                        <p
                            className=" fs-20 tp_fade_anim "
                            style={{
                                textAlign: "center",
                                display: "block",
                                width: "100%",
                                maxWidth: "1000px",
                                margin: "0 auto",
                                padding: "0 15px"
                            }}
                        >
                            we'd Love to discuss how we can help you streamline your business with Proactii Media LLP Managed Service suite. Contact us for a no-obligation conversation. A member of our team will get in touch with you within afew business hours.
                        </p>

                        <div className="row pt-80 pb-80">
                            <div className="col-lg-6">
                                <div className="tp-contact-us-map p-relative pr-40 tp_fade_anim" data-fade-from="left">
                                    <div className="tp-contact-map-icon-box">
                                        <div className="tp-contact-map-icon">
                                            <span>
                                                <img src="assets/img/contact/map-icon.svg" alt="" />
                                            </span>
                                        </div>
                                    </div>


                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.58387291103!2d72.9209984743684!3d20.36588301021734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf31da8d5677%3A0x4402d33825c9b406!2sProactii!5e1!3m2!1sen!2sin!4v1791631003045!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        title="Proactii Office Location"
                                    />


                                </div>





                            </div>
                            <div className="col-lg-6">
                                <div className="tp-contact-us-wrap tp_fade_anim" data-fade-from="right" data-ease="bounce">
                                    <h3 className="tp-contact-us-title mb-55">Send a Message</h3>
                                    <form id="contact-form" action="https://html.aqlova.com/hebo-prev/hebo/assets/mail.php" method="POST">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>Full name*</label>
                                                    <input name="name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>Email address*</label>
                                                    <input name="email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>Website link</label>
                                                    <input name="subject" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>How Can We Help You*
                                                    </label>
                                                    <textarea name="message"></textarea>
                                                </div>
                                                <div className="tp-contact-form-btn">
                                                    <button className="w-100" type="submit">
                                                        <span>
                                                            <span className="text-1">Send Message</span>
                                                        </span>
                                                    </button>
                                                    <p className="ajax-response mt-5"></p>
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