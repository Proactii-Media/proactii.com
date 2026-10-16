"use client";

import { testimonials } from "@/constants/data";


export default function Testimonial() {
    return (

        <>
            <section className="md-testimonial-area md-testimonial-space  include-bg tp-radius-20 pt-100 pb-80 fix"
                style={{
                    background: "#f7f7f7"
                }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper mb-80">
                        <div className="row">

                            <div className="col-xl-12 text-center ">
                                <span className="md-section-subtitle  mb-20 tp_fade_anim">testimonials</span>

                                <div className="md-section-content-wrapper  ">

                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">What do people praise about <span style={{ color: "#0098C6" }}>Proactii Media LLP?</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md-testimonial-item-wrapper">
                    <div className="container-fluid">
                        <div className="swiper md_testimonial_slider_active md-testimonial-slider-space" >
                            <div className="swiper-wrapper slide-transition"
                                style={{
                                    background: "#ffff", color: "black"

                                }}
                            >
                                {testimonials.map((item) => (
                                    <div className="swiper-slide" key={item.id}>
                                        <div className="md-testimonial-item">

                                            <div className="md-testimonial-author-wrapper d-flex align-items-center mb-50">
                                                <div className="md-testimonial-author-avatar">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                </div>

                                                <div className="md-testimonial-author-info mb-2" style={{ color: "#FFCF27;" }}>

                                                    {Array.from({ length: item.rating }, (_, index) => (
                                                        <span key={index} style={{ display: "inline-flex" }}>
                                                            <svg
                                                                width="18"
                                                                height="17"
                                                                viewBox="0 0 18 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M8.55951 0L10.5801 6.21885H17.119L11.829 10.0623L13.8496 16.2812L8.55951 12.4377L3.26944 16.2812L5.29007 10.0623L9.53674e-07 6.21885H6.53888L8.55951 0Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                    ))}

                                                    <h3 className="md-testimonial-author-title">
                                                        {item.name}
                                                    </h3>

                                                    <span className="md-testimonial-author-designation">
                                                        {item.designation}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="md-testimonial-text">
                                                <p className="people-special-text">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}