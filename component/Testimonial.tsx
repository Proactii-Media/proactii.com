"use client";

import { testimonials } from "@/constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function Testimonial() {
    // 🔑 Loop mode ke liye enough slides chahiye
    // 5 se kam hain to 3x duplicate karo (marquee ke liye zaroori)
    const slides =
        testimonials.length < 6
            ? [...testimonials, ...testimonials, ...testimonials]
            : testimonials;

    return (
        <section
            className="md-testimonial-area md-testimonial-space include-bg pt-100 pb-80 fix"
            style={{ background: "#D16F2E" }}
        >
            <div className="container container-1424">
                <div className="md-section-content-top-wrapper mb-80">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <span className="md-section-subtitle mb-20 tp_fade_anim text-white">
                                testimonials
                            </span>

                            <div className="md-section-content-wrapper">
                                <h3 className="cr-section-content-title md-section-title tp_fade_anim text-white">
                                    What do people praise about{" "}
                                    <span style={{ color: "#ECBC31" }}>
                                        Proactii Media LLP?
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md-testimonial-item-wrapper">
                <div className="container-fluid">
                    <Swiper
                        className="md_testimonial_slider_active md-testimonial-slider-space"
                        modules={[Autoplay, FreeMode]}
                        loop={slides.length > 5}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            waitForTransition: false,
                        }}
                        freeMode={{
                            enabled: true,
                            momentum: false,
                        }}
                        allowTouchMove={true}
                        slidesPerView={2.5}
                        spaceBetween={30}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper?.autoplay?.start();
                            }, 150);
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.15,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {slides.map((item, index) => (
                            <SwiperSlide key={`${item.id}-${index}`}>
                                <div className="md-testimonial-item">
                                    <div className="md-testimonial-author-wrapper d-flex align-items-center mb-50">
                                        <div className="md-testimonial-author-avatar">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>

                                        <div
                                            className="md-testimonial-author-info mb-2"
                                            style={{ color: "#FFCF27" }}
                                        >
                                            {Array.from(
                                                { length: item.rating },
                                                (_, starIndex) => (
                                                    <span
                                                        key={starIndex}
                                                        style={{
                                                            display: "inline-flex",
                                                        }}
                                                    >
                                                        <svg
                                                            width="18"
                                                            height="17"
                                                            viewBox="0 0 18 17"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.55951 0L10.5801 6.21885H17.119L11.829 10.0623L13.8496 16.2812L8.55951 12.4377L3.26944 16.2812L5.29007 10.0623L9.53674e-7 6.21885H6.53888L8.55951 0Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                )
                                            )}

                                            <h3 className="md-testimonial-author-title">
                                                {item.name}
                                            </h3>

                                            <span className="md-testimonial-author-designation">
                                                {item.designation}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="md-testimonial-text">
                                        <p className="people-special-text">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}