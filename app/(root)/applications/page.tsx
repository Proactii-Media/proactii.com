"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Application() {
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const detailRef = useRef<HTMLDivElement>(null);

    const selectedApplication = applications.find(
        (a) => a.slug === selectedSlug
    );

    useEffect(() => {
        if (selectedSlug && detailRef.current) {
            detailRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [selectedSlug]);

    return (
        <>
            {/* ============ BANNER ============ */}
            <div
                className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
                style={{
                    backgroundImage:
                        "url('/shubhamimages/banner/applicationbanner.png')",
                }}
            >
                <div className="container">
                    <div className="dlab-bnr-inr-entry align-m text-center">
                        <h1 className="text-white mb-3">
                            Our Trusted Clients
                        </h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>Our Trusted Clients</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============ CONTENT ============ */}
            <div className="content-block">
                <div className="page-content">
                    <div
                        className="section-full bg-white content-inner-2 wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="0.6s"
                    >
                        <div className="container">

                            {/* ---- Heading ---- */}
                            <div className="section-head style2 text-center">
                                <div className="sort-title clearfix text-center">
                                    <h4 style={{ fontSize: "24px" }}>
                                        Our Applications
                                    </h4>
                                    <p className="mt-3">
                                        Our automatic machines are widely used
                                        across various industries including Pen
                                        &amp; Stationery, Pharmaceutical,
                                        Packaging, and Engineering sectors. We
                                        provide advanced automation solutions
                                        designed to improve production
                                        efficiency, accuracy, and product
                                        quality with reliable performance.
                                    </p>
                                </div>
                            </div>

                            {/* ---- Filter buttons ---- */}
                            <div className="row">
                                <div className="site-filters m-b20 filters2">
                                    <ul className="filters row">

                                        {/* All */}
                                        <li
                                            className={`btn col-12 col-md-4 col-lg-3 ${
                                                selectedSlug === null
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <input type="radio" />
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedSlug(null);
                                                }}
                                            >
                                                <span>All</span>
                                            </a>
                                        </li>

                                        {/* Applications */}
                                        {applications.map((application) => (
                                            <li
                                                key={application.id}
                                                className={`btn col-12 col-md-4 col-lg-3 ${
                                                    selectedSlug ===
                                                    application.slug
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <input type="radio" />
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedSlug(
                                                            application.slug
                                                        );
                                                    }}
                                                >
                                                    <span>
                                                        {application.shortTitle ||
                                                            application.title}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>

                            {/* ---- Grid + Detail ---- */}
                            <div className="row p-l0 sp10">
                                <div className="col-lg-12">

                                    {/* UL GRID — only when "All" */}
                                    {selectedSlug === null && (
                                        <ul
                                            id="masonry"
                                            className="dlab-gallery-listing gallery mfp-gallery text-center row"
                                        >
                                            {applications.map(
                                                (application) => (
                                                    <li
                                                        key={application.id}
                                                        className={`card-container col-lg-4 col-md-6 col-sm-6 ${application.slug}`}
                                                    >
                                                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3">

                                                            <img
                                                                src={
                                                                    application.image
                                                                }
                                                                alt={
                                                                    application.title
                                                                }
                                                                width={390}
                                                                height={350}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "auto",
                                                                }}
                                                            />

                                                            <div className="overlay-bx">
                                                                <div className="portinner">

                                                                    <div className="port-up">
                                                                        <span className="text-primary">
                                                                            APPLICATION
                                                                        </span>
                                                                        <h3 className="port-title">
                                                                            <a
                                                                                href="#"
                                                                                className="application-select"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();
                                                                                    setSelectedSlug(
                                                                                        application.slug
                                                                                    );
                                                                                }}
                                                                            >
                                                                                {
                                                                                    application.title
                                                                                }
                                                                            </a>
                                                                        </h3>
                                                                    </div>

                                                                    <div className="port-down">
                                                                        <a
                                                                            href="#"
                                                                            className="btn-link application-select"
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                setSelectedSlug(
                                                                                    application.slug
                                                                                );
                                                                            }}
                                                                        >
                                                                            View
                                                                            Detail{" "}
                                                                            <i className="la la-arrow-right" />
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                    {/* ==========================
                                        DETAIL — with Framer Motion
                                    ========================== */}
                                    <AnimatePresence mode="wait">
                                        {selectedApplication && (
                                            <motion.div
                                                key={selectedApplication.slug}
                                                id="application-detail"
                                                ref={detailRef}
                                                className="application-detail-section"
                                                initial={{
                                                    opacity: 0,
                                                    y: 40,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -20,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                style={{
                                                    scrollMarginTop: "100px",
                                                    display: "block",
                                                    visibility: "visible",
                                                }}
                                            >
                                                <div className="application-detail">
                                                    <div className="row align-items-center">

                                                        {/* Image — slides in from left */}
                                                        <div className="col-lg-6 col-md-6 m-b30">
                                                            <motion.div
                                                                className="application-detail-image"
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: -30,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                }}
                                                                transition={{
                                                                    duration: 0.6,
                                                                    delay: 0.1,
                                                                }}
                                                            >
                                                                <Image
                                                                    src={
                                                                        selectedApplication.image
                                                                    }
                                                                    alt={
                                                                        selectedApplication.title
                                                                    }
                                                                    className="img-fluid"
                                                                    width={
                                                                        560
                                                                    }
                                                                    height={
                                                                        450
                                                                    }
                                                                />
                                                            </motion.div>
                                                        </div>

                                                        {/* Content — slides in from right */}
                                                        <div className="col-lg-6 col-md-6 m-b30">
                                                            <motion.div
                                                                className="application-detail-content"
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: 30,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                }}
                                                                transition={{
                                                                    duration: 0.6,
                                                                    delay: 0.2,
                                                                }}
                                                            >
                                                                <span className="text-primary">
                                                                    APPLICATION
                                                                </span>
                                                                <h2 className="m-b20">
                                                                    {
                                                                        selectedApplication.title
                                                                    }
                                                                </h2>
                                                                <div
                                                                    style={{
                                                                        textAlign:
                                                                            "justify",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            selectedApplication.description,
                                                                    }}
                                                                />
                                                            </motion.div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}