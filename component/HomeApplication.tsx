
"use client";

import { useEffect, useState } from "react";
import { applications } from "@/constants/data";

export default function HomeApplications() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tabStartIndex, setTabStartIndex] = useState(0);

    const visibleTabs = 4;

    // Automatic slider
    useEffect(() => {
        if (applications.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next =
                    prev >= applications.length - 1 ? 0 : prev + 1;

                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Keep 4 tabs visible and move tabs smoothly
    useEffect(() => {
        if (applications.length <= visibleTabs) return;

        if (currentIndex === 0) {
            setTabStartIndex(0);
        } else if (currentIndex >= applications.length - visibleTabs) {
            setTabStartIndex(applications.length - visibleTabs);
        } else {
            setTabStartIndex(currentIndex);
        }
    }, [currentIndex]);

    const handleTabClick = (index: number) => {
        setCurrentIndex(index);

        if (applications.length > visibleTabs) {
            if (index >= applications.length - visibleTabs) {
                setTabStartIndex(applications.length - visibleTabs);
            } else {
                setTabStartIndex(index);
            }
        }
    };

    return (
        <>
            {/* ================= APPLICATION SECTION ================= */}
            <section className="section-full content-inner bg-white home-applications">
                <div className="container">

                    <div className="section-head text-center">
                        <h2 className="title">Our Application</h2>

                        <p>
                            There are many variations of passages of Lorem Ipsum
                            typesetting industry has been the industry's standard
                            dummy text ever since the been when an unknown printer.
                        </p>
                    </div>

                    <div className="on-show-slider">

                        {/* ================= APPLICATION TABS ================= */}
                        <div className="application-tabs-slider">

                            <div
                                className="application-tabs-track"
                                style={{
                                    transform: `translateX(-${tabStartIndex * 25}%)`,
                                }}
                            >
                                {applications.map((application, index) => (
                                    <div
                                        className={`application-tab ${
                                            index === currentIndex ? "active" : ""
                                        }`}
                                        key={application.title}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <div className="project-owbx">
                                            <h4 className="title">
                                                {application.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* ================= APPLICATION DETAILS ================= */}
                        <div className="application-slider">

                            <div
                                className="application-track"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {applications.map((application) => (
                                    <div
                                        className="application-slide"
                                        key={application.title}
                                    >
                                        <div className="application-details">

                                            {/* Image */}
                                            <div className="application-image">
                                                <img
                                                    src={application.image}
                                                    alt={application.title}
                                                    className="radius-sm"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="application-content">
                                                <div className="our-story content-bx1">

                                                    <span>APPLICATION</span>

                                                    <h2 className="dlab-title">
                                                        {application.title}
                                                    </h2>

                                                    <p>
                                                        {application.description}
                                                    </p>

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

            {/* ================= CALL TO ACTION ================= */}
            <div className="section-full call-action bg-primary">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-9 text-white">
                            <h2
                                className="title"
                                style={{ fontSize: "24px" }}
                            >
                                Manufacturer & exporter of automatic assembly
                                machines.
                            </h2>
                        </div>

                        <div className="col-lg-3 d-flex">
                            <a
                                href="/contact"
                                className="site-button white align-self-center outline ms-auto radius-xl outline-2 btnhover16"
                            >
                                Get To Touch
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

