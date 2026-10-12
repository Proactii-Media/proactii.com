"use client";

import Link from "next/link";
import { services } from "@/constants/data";
import { useRef, useState } from "react";

export default function HomeServices() {
   const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleVideo = async () => {
        const video = videoRef.current;

        if (!video) return;

        if (video.paused) {
            try {
                await video.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Video playback failed:", error);
            }
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };



    return (
        <>
        <section
            className="dgs-service-area dgs-service-space pt-100 pb-80"
            data-bg-color="#0098C6"
            style={{ backgroundColor: "#0098C6" }}
        >
            <div className="container container-1424">
                <div className="dgs-service-inner">

                    {/* =========================
                        TOP
                    ========================== */}
                   <div className="container container-1424">
                    <div className="md-section-content-top-wrapper mb-80">
                        <div className="row">

                            <div className="col-xl-12 text-center ">
                                <span className="md-section-subtitle  mb-20 tp_fade_anim text-white">Our Services</span>

                                <div className="md-section-content-wrapper  ">

                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-white">Digital Solutions That Drive Business Growth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* =========================
                        SERVICES
                    ========================== */}
                        <div className="container container-1424">
                    <div className="dgs-service-bottom fix">
                        <div className="row gx-50">

                            {services.map((service, index) => (
                                <div
                                    className="col-lg-6 col-md-6 col-sm-12"
                                    key={service.id ?? index}
                                >
                                    <div
                                        className="dgs-service-item mb-70 tp_fade_anim service-box"
                                        data-fade-from={index % 2 === 0 ? "left" : "right"}
                                    >
                                        <div className="dgs-service-item-inner">

                                            {/* ICON */}
                                            <div className="dgs-service-icon mb-45">
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                />
                                            </div>

                                            {/* TITLE */}
                                            <h3 className="dgs-service-title">
                                                <Link
                                                    className="tp-line-black"
                                                    href={service.link}
                                                >
                                                    {service.title}
                                                </Link>
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <div className="dgs-service-content mb-55">
                                                <p className="textalign">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* NUMBER */}
                                          <div className="dgs-service-number">
    <Link
        href={service.link}
        className="dgs-service-read-more"
    >
        Read More <span>→</span>
    </Link>
</div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>


<div className="tp-banner-area black-bg-3">
    <div className="tp-banner-img">
        <video
            ref={videoRef}
            className="img-cover scale-up"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        >
            <source
                src="/assets/images/videoplayback.mp4"
                type="video/mp4"
            />
        </video>

        <button
            type="button"
            className="video-toggle-btn"
            onClick={toggleVideo}
            aria-label={isPlaying ? "Pause video" : "Play video"}
        >
            {isPlaying ? "Ⅱ" : "▶"}
        </button>
    </div>
</div>





</>
    );
}