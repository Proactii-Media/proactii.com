
"use client";
import { weareproactii } from "@/constants/data";



export default function HomeWeAre() {
    return (
        <>            <section className="md-service-area md-service-space pt-100 pb-80">
            <div className="container container-1424">
                <div className="md-section-content-wrapper mb-35 text-center">

                    {/* Title */}
                    <h2
                        className="cr-section-content-title fs-80 mb-15 tp_fade_anim"
                        style={{ textAlign: "center" }}
                    >
                        We are{" "}
                        <span style={{ color: "#0098C6" }}>
                            Proactii Media LLP
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <span className="md-section-subtitle  mb-20 tp_fade_anim">THE LEADING IT SOLUTIONS COMPANY</span>

                    {/* Paragraph - Responsive Fix */}
                    <p
                        className=" fs-20 tp_fade_anim mb-30"
                        style={{
                            textAlign: "center",
                            display: "block",
                            width: "100%",
                            maxWidth: "1000px",
                            margin: "0 auto",
                            padding: "0 15px"
                        }}
                    >
                        Today we’re proud to boast a strong team of IT engineers who
                        thrive on rolling up their sleeves and solving your IT
                        problems and meeting your business needs.
                    </p>
                </div>
            </div>

            <div className="container-fluid p-0">

                <div className="tp-service-pin tp-panel-pin-service-area">
                    {weareproactii.map((section, index) => (
                        <div
                            className="md-service-item md-service-border tp-panel-pin-sr"
                            key={section.title}
                        >
                            <div className="row gx-0 align-items-center">

                                {/* CONTENT */}
                                <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-xl-0 pb-lg-0 pb-md-30 pb-30">
                                    <div className="tp-experience-wrapper pl-70">
                                        <h3 className="mb-20">
                                            {section.title}
                                        </h3>

                                        <ul className="people-special-list">
                                            {section.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="people-special-item"
                                                >
                                                    <span className="people-special-icon">
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M4 10.5L8 14.5L16 6"
                                                                stroke="currentColor"
                                                                strokeWidth="2.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>

                                                    <span className="people-special-text">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={section.link}
                                            className="people-special-link bg-red"
                                        >
                                            Find out more
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
                                        </a>
                                    </div>
                                </div>

                                {/* DIFFERENT IMAGE FOR EACH SECTION */}
                                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                                    <div className="md-service-thumb text-lg-end">
                                        <img
                                            className="tp_fade_anim"
                                            data-delay="0.2"
                                            data-fade-from="bottom"
                                            src={section.image}
                                            alt={section.title}
                                            style={{
                                                width: "100%",
                                                maxWidth: "100%",
                                                height: "auto",
                                                display: "block",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </section>
            <section
                className="tp-experience-area pt-80 pb-80"
 style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/images/11.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}}
            >
                <div className="container container-1424">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 text-start mb-4 mb-lg-0">
                            <p  style={{ color: "#fff" }}>
                                Industries We Serve
                            </p>

                            <div className="md-section-content-wrapper">
                                <h3
                                    className="cr-section-content-title mb-20 md-section-title tp_fade_anim"
                                    style={{ color: "#fff" }}
                                >
                                    WE WORK WITH GLOBAL BRANDS
                                </h3>
                            </div>

                            <p className=" mb-0"  style={{ color: "#fff" }}>
                                Our vertical solutions expertise allows your business
                                to streamline workflow, and increase productivity.
                            </p>

                            <p className=" mb-0"  style={{ color: "#fff" }}>
                                No matter the business, Proactii Media LLP has you
                                covered with industry compliant solutions.
                            </p>
                        </div>

                        <div className="col-xl-5 col-lg-5 text-lg-center text-start">
                            <div className="mb-10">
                                <i
                                    className="fal fa-phone"
                                    style={{ color: "#fff", fontSize: "30px" }}
                                ></i>
                            </div>
                            <div>
                                <p className="text-margin" style={{ color: "#fff" }}>Reach Out Now</p>
                            </div>
                            <div className="phone-hover">
                                <h2>099247 03447</h2>
                            </div>



                      
                              <a
                                            href="/contact"
                                            className="people-special-link bg-red"
                                        >
                                           View Profile
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
                                        </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}