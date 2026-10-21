"use client";

// import Image from "next/image";
// import { funFacts } from "@/constants/data";


const peopleHighlights = [
    "Our people love being here",
    "We have a 95%+ retention rate for engineers",
    "We promote long-term relationships with clients",
    "Our team are passionate people who really know your system",
];



export default function HomeWeare() {
    return (
        <>
            <section
                className="tp-experience-area pt-80 pb-80  "
                data-bg-color="#fff"
                style={{ backgroundColor: "#fff" }}
            >
                <div className="container container-1424">

                    <div className="row">
                        <h2 className="cr-section-content-title fs-80 mb-15 tp_fade_anim" style={{ textAlign: "center" }}>
                            We are <span style={{ color: "#0098C6" }}> Proactii Media LLP </span>

                        </h2>
                        <span className="cr-section-content-subtitle fs-20 tp_fade_anim" style={{ textAlign: "center" }}>
                            THE LEADING IT SOLUTIONS COMPANY
                        </span>
                        <p className="cr-section-content-subtitle fs-20 tp_fade_anim"> Today we’re proud to boast a strong team of IT engineers who thrive on rolling up
                            their sleeves and solving your IT problems and meeting your business needs.</p>
                       <div className="row">

                         {/* LEFT CONTENT */}
                        <div className="col-xl-6">
                            <div className="tp-experience-left-wrapper">
                                <img
                                    src="/assets/images/home/weare1.png"
                                    alt="Proactii Media Success Stories"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </div>
                        {/* RIGHT CONTENT */}
                        <div className="col-xl-6 col-lg-10">
                            <div className="tp-experience-wrapper pl-70">

                                <h3 className="people-special-title">
                                    Our People Make Us Special:
                                </h3>

                                <ul className="people-special-list">
                                    {peopleHighlights.map((point, index) => (
                                        <li key={index} className="people-special-item">
                                            <span className="people-special-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M4 10.5L8 14.5L16 6"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="people-special-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="/about"
                                    className="people-special-link bg-red"
                                >
                                    Find out more

                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>















                  <div className="container container-1424">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7 text-start mb-4 mb-lg-0">
                            <div className="md-section-content-wrapper">
                                <h3 className="cr-section-content-title mb-20 md-section-title tp_fade_anim text-black">
                                    We will help you overcome your <span style={{ color: "#0098C6" }}>technology challenges</span>
                                </h3>
                            </div>
                            <p className="text-black mb-0 text-black">
                                Call us on <strong style={{ color: "red" }}>(+91) 99247 03447</strong> email us at{" "}
                                <a href="mailto:mail@proactii.com" className="text-decoration-underline" style={{ color: "red" }}>
                                    <strong> mail@proactii.com </strong>
                                </a>{" "}
                                or fill out the following form to start the conversation.
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-5 text-lg-end text-start">
                            <a href="/contact" className="contact-hover-btn d-inline-flex align-items-center gap-2 px-4 py-3 rounded-1 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                CONTACT US
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}