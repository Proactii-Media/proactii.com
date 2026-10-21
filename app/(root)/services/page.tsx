

"use client";

import { services } from "@/constants/data"
import Image from "next/image";
import Link from "next/link";

export default function Service() {

    return (
        <>
            {/* ========== Breadcrumb Start Section ========== */}
   <div
                className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
                data-background="/assets/images/banner/service.png"
                style={{
                    backgroundImage: "url('/assets/images/banner/service.png')",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="tp-breadcrumb-content text-center ">
                                <h3 className="tp-breadcrumb-title tp-char-animation text-white">
                                    Our Services
                                </h3>

                                <div className="tp-breadcrumb-list mb-25 ">
                                    <span className="text-white">
                                        <a href="/">Home</a>
                                    </span>

                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">Services</span>
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

            <section
                className="tp-experience-area pt-80 pb-80  "
                data-bg-color="#fff"
                style={{ backgroundColor: "#fff" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <div className="md-section-content-wrapper mb-20 ">
                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">Digital Solutions That Drive Your Business Forward</h3>
                                </div>
                                <p
                                    className=" fs-20 tp_fade_anim"
                                    style={{
                                        textAlign: "center",
                                        display: "block",
                                        width: "100%",
                                        maxWidth: "1000px",
                                        margin: "0 auto",
                                        padding: "0 15px"
                                    }}
                                >
                                    From high-performing websites and mobile apps to powerful branding and targeted digital marketing, we help your business attract more customers, strengthen its online presence, and achieve measurable growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="down" className="md-service-area pb-80">
                <div className="container-fluid p-0">
                    <div className="tp-service-pin tp-panel-pin-service-area">
                        {services.map((service, index) => (
                            <div
                                className="md-service-item md-service-border tp-panel-pin-sr"
                                key={service.title}
                            >
                                <div className="row gx-0 flex-column-reverse flex-lg-row">
                                    <div className="col-xl-8 col-lg-8">
                                        <div className="md-service-content-wrapper">
                                            <div className="md-service-title-box">
                                                <h3 className="md-service-title">
                                                    <a href={service.link}>
                                                        {service.title}
                                                    </a>
                                                </h3>
                                            </div>

                                            <div className="md-service-content-box d-xxl-flex align-items-xxl-end justify-content-xxl-between mb-20">
                                                <div className="md-service-content">
                                                    <p>{service.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md-service-btn-wrap tp-btn-black-bg">
                                            <a
                                                className="people-special-link bg-red"
                                                href={service.link}
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
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
                                        <div className="md-service-thumb text-lg-end">
                                            <Image
                                                className="tp_fade_anim"
                                                data-delay="0.2"
                                                data-fade-from="bottom"
                                                src={service.image}
                                                alt={service.title}
                                                width={400}
                                                height={300}
                                                style={{ width: "100%", height: "auto" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}