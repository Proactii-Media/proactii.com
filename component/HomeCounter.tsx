"use client";

import Image from "next/image";
import { funFacts } from "@/constants/data";



export default function HomeCounter() {
    return (
        <>
            <section
                className="tp-experience-area pt-80 pb-80  "
                data-bg-color="#fff"
                style={{ backgroundColor: "#fff" }}
            >
                <div className="container container-1424">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="tp-experience-left-wrapper">
                                <div className="tp-section-content-wrapper mb-40">


                                    {/* --- START: The "10 Years" Element from Image --- */}
                                    <div className="tp-experience-badge d-flex align-items-center mt-40 tp_fade_anim">
                                        <div className="tp-experience-number">
                                            10
                                        </div>
                                        <div >
                                            <p className="tp-experience-text">
                                                YEARS'<br />
                                                EXPERIENCE<br />
                                                IN IT
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="tp-section-title tp-section-title-white tp_fade_anim" style={{ color: "#010103", lineHeight: "1.2", }}>
                                        Proactii Media LLP more about <span style={{ color: "#E62E2E" }}>our Success Stories</span>
                                    </h2>

                                    {/* --- END: The "10 Years" Element --- */}

                                </div>
                            </div>
                        </div>
                        {/* RIGHT CONTENT */}
                        <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="tp-experience-wrapper tp-panel-pin-area pl-70">

                                {/* ITEM ROW 1 */}


                                {/* ITEM ROW 2 */}
                                <div
                                    className="tp-experience-item-wrapper tp-panel-pin"
                                    data-end="bottom 85%"
                                >
                                    <div className="row">
                                        {funFacts.map((item, index) => (
                                            <div
                                                className="col-xl-6 col-lg-6  col-6"
                                                key={item.label}
                                            >
                                                <div
                                                    className="cr-about-funfact-item d-flex align-items-center mb-30 tp_fade_anim"
                                                    data-delay={`0.${index + 1}`}
                                                >
                                                    <div className="cr-about-funfact-content">
                                                        <h3 className="cr-about-funfact-num">
                                                            <span
                                                                data-purecounter-duration="1"
                                                                data-purecounter-end={item.number}
                                                                className="purecounter"
                                                            >
                                                                0
                                                            </span>
                                                            {item.suffix}
                                                        </h3>

                                                        <i>{item.label}</i>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}