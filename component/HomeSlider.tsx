"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  "WEBSITES.",
  "MOBILE APPS.",
  "DIGITAL BRANDS.",
  "DIGITAL MARKETING.",
];




export default function HeroBanner() {
  const [currentService, setCurrentService] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);

  const currentText = services[currentService];

  useEffect(() => {
    setVisibleLetters(0);

    let letterIndex = 0;

    const typingInterval = setInterval(() => {
      letterIndex++;
      setVisibleLetters(letterIndex);

      if (letterIndex >= currentText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentService, currentText.length]);

  useEffect(() => {
    const serviceInterval = setTimeout(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearTimeout(serviceInterval);
  }, [currentService]);
  

  return (
    <>
      <section
        className=" cr-hero-space paste-bg pl-130 pr-125 pb-20 include-bg"
        style={{
          backgroundImage:
            "url('/assets/img/home-4/hero/hero-bg-shape.png')",
        }}
      >
        <div className="container-fluid p-0">
          {/* HERO TOP */}
          <div className="cr-hero-top-content-wrapper pb-70">
            <div className="row gx-0 align-items-center">
              {/* LEFT CONTENT */}
              <div className="col-xl-12">
                <div className="cr-hero-content-wrapper mb-40">
                  {/* SMALL TOP TEXT */}
                  <span
                    className="d-block mb-20"
                    style={{ fontSize: "18px", fontWeight: 500 }}
                  >
                    STRATEGY • TECHNOLOGY • CREATIVITY • GROWTH
                  </span>

                  {/* HERO TITLE */}
                  <h2 className="cr-hero-title proactii-hero-title">
                    <span className="we-build-text">We Build</span>
                    <br />
                    <span className="hero-letter-text">
                      {currentText.split("").map((letter, index) => (
                        <span
                          key={`${currentService}-${index}`}
                          className={
                            index < visibleLetters
                              ? "hero-letter hero-letter-visible"
                              : "hero-letter"
                          }
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      ))}
                    </span>
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="mt-30 mb-35"
                    style={{
                      maxWidth: "650px",
                      fontSize: "18px",
                      lineHeight: "1.7",
                    }}
                  >
                    From websites and mobile apps to branding and digital
                    marketing, we create meaningful digital experiences that
                    turn ideas into memorable brands and help businesses grow
                    with confidence.
                  </p>

                  {/* BUTTONS */}
                  <div className="d-flex align-items-center flex-wrap gap-3"
                  
                  >
                    <Link href="/contact" className="tp-btn-yellow-square"
                        style={{
            display: "inline-flex",       /* Forces items into a row */
            alignItems: "center",         /* Vertically centers the text and arrow */
            gap: "10px",                  /* Adds space between text and arrow */
            flexDirection: "row",         /* Ensures horizontal layout */
            textDecoration: "none"        /* Removes underline from link */
        }}
                    >
                      Start Your Project
                      <span>
                        <svg
                          width="18"
                          height="10"
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.29231 0C10.773 2.00217 14.774 3.89283 18 5.00061C14.774 6.10761 10.7731 7.99749 8.29278 10L10.0219 5.5746L0.619514 5.57487C0.455171 5.57467 0.297634 5.51408 0.181516 5.40642C0.0948338 5.32613 0.0358078 5.22386 0.011901 5.11253C-0.0120059 5.0012 0.00027696 4.8858 0.0472025 4.78093C0.094127 4.67606 0.173586 4.58643 0.275531 4.52336C0.377475 4.46029 0.497332 4.42662 0.619946 4.4266L10.022 4.42665L8.29231 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </Link>

                    <Link href="/services" className="tp-btn-border">
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   <div className="pp-brand-area pp-style-2 pp-brand-style">
                 <div className="container-fluid p-0">
  <div
    className="pp-brand-wrapper z-index-1"
    style={{ backgroundColor: "#0098C6" }}
  >
    <div className="swiper tp-text-slide-active">
      <div className="swiper-wrapper slide-transition">

        <div className="swiper-slide">
          <div className="pp-brand-item">
            <span className="pp-brand-title">
              <i>01 /</i>Digital Solutions
            </span>

            <span className="pp-brand-icon">
              {/* your SVG */}
            </span>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="pp-brand-item">
            <span className="pp-brand-title">
              <i>02 /</i>Web Development
            </span>

            <span className="pp-brand-icon">
              {/* your SVG */}
            </span>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="pp-brand-item">
            <span className="pp-brand-title">
              <i>03 /</i>Mobile App Development
            </span>

            <span className="pp-brand-icon">
              {/* your SVG */}
            </span>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="pp-brand-item">
            <span className="pp-brand-title">
              <i>04 /</i>Digital Marketing
            </span>

            <span className="pp-brand-icon">
              {/* your SVG */}
            </span>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="pp-brand-item">
            <span className="pp-brand-title">
              <i>05 /</i>Technology That Drives Growth
            </span>

            <span className="pp-brand-icon">
              {/* your SVG */}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
                </div>
    </>
  );
}