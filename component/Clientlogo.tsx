"use client";

import { logos } from "@/constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ClientLogo() {
  const slides = logos.length < 10 ? [...logos, ...logos, ...logos] : logos;

  return (
    <>
      <section
        className="tp-experience-area pt-80 pb-80"
        style={{
          backgroundImage: "url('/assets/images/banner/3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#333",
        }}
      >
        <div className="container container-1424">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-12 text-start mb-4 mb-lg-0">
              <div className="md-section-content-wrapper">
                <h3 className="cr-section-content-title mb-20 md-section-title tp_fade_anim text-white">
                  We will help you overcome your{" "}
                  <span style={{ color: "#0098C6" }}>
                    technology challenges
                  </span>
                </h3>
              </div>

              <p className="text-black mb-0 text-white">
                Call us on{" "}
                <strong style={{ color: "#EDBC31" }}>
                  (+91) 99247 03447
                </strong>{" "}
                email us at{" "}
                <a
                  href="mailto:mail@proactii.com"
                  className="text-decoration-underline"
                  style={{ color: "#EDBC31" }}
                >
                  <strong> mail@proactii.com </strong>
                </a>{" "}
                or fill out the following form to start the conversation.
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-12 text-lg-end text-start">
              <a
                href="/contact"
                className="contact-hover-btn d-inline-flex align-items-center gap-2 px-4 py-3 rounded-1 shadow-sm"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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

      {/* Background Yellow */}
      <div
        className="cr-brand-area-2 cr-brand-style-3 tp-brand fix pt-60 pb-60"
        style={{ 
          backgroundColor: "#EEBE31",
          borderTop: "1px solid #EEBE31",
          borderBottom: "1px solid #EEBE31",
        }}
      >
        <div className="container-fluid p-0">
          <div className="cr-brand-inner-wrap">
            <Swiper
              className="cr-brand-logo-slide-active"
              modules={[Autoplay]}
              loop
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              allowTouchMove={true}
              slidesPerView={2}
              spaceBetween={0}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper?.autoplay?.start();
                }, 150);
              }}
              breakpoints={{
                0:    { slidesPerView: 2, spaceBetween: 0 },
                576:  { slidesPerView: 3, spaceBetween: 0 },
                768:  { slidesPerView: 4, spaceBetween: 0 },
                1024: { slidesPerView: 5, spaceBetween: 0 },
                1200: { slidesPerView: 6, spaceBetween: 0 },
              }}
            >
              {slides.map((logo, index) => (
                <SwiperSlide key={`${logo}-${index}`}>
                  <div
                    className="cr-brand-item-2"
                    style={{
                      width: "100%",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px 40px",
                      backgroundColor: "#ffffff", // ✅ Box ke andar White color
                      borderTop: "1px solid #EEBE31", // ✅ Yellow borders
                      borderBottom: "1px solid #EEBE31",
                      borderRight: "1px solid #EEBE31",
                    }}
                  >
                    <img
                      src={`/assets/images/client/${logo}`}
                      alt={logo.replace(".png", "")}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}