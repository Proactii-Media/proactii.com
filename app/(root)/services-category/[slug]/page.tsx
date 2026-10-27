"use client";

import { services } from "@/constants/data";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServiceCategory() {
    const params = useParams();
    const slug = params.slug as string;

    const matchedParent = services.find((service) =>
        service.relatedServices?.some(
            (item) => item.link.split("/").filter(Boolean).at(-1) === slug
        )
    );

    const relatedService = matchedParent?.relatedServices?.find(
        (item) => item.link.split("/").filter(Boolean).at(-1) === slug
    );

    if (!relatedService) {
        return <div>Service not found</div>;
    }
    // ============================================================
    // Determine which alternating sections will render
    // ============================================================
    const willRenderLeverage =
        !!relatedService.leverage_title ||
        (Array.isArray(relatedService.leverage) &&
            relatedService.leverage.length > 0);

    const willRenderSolution =
        !!relatedService.solution_title ||
        !!relatedService.solution_des ||
        (Array.isArray(relatedService.servicesbox) &&
            relatedService.servicesbox.length > 0);

    const willRenderExpertise =
        !!relatedService.expertise_title || !!relatedService.expertise_des;

    // Order matters — matches the JSX render order below
    const alternatingSections = [
        true,                 // Intro
        willRenderLeverage,   // Leverage
        true,                 // Process  ← now alternates
        willRenderExpertise,  // Expertise
        willRenderSolution,   // Solution
        true,                 // Portfolio
        true,                 // Custom IT
    ];

    // Precompute alternating colors — only consumed by visible sections
    let __toggle = 0;
    const __colors = alternatingSections.map((visible) => {
        if (!visible) return null;
        return __toggle++ % 2 === 0 ? "#FFFFFF" : "#F7F7F7";
    });

    const [
        bgIntro,
        bgLeverage,
        bgProcess,
        bgExpertise,
        bgSolution,
        bgPortfolio,
        bgCustomIT,
    ] = __colors;



    return (
        <>
            {/* ========== Breadcrumb ========== */}
     {/* ========== Breadcrumb ========== */}
<div
    className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
    style={{
        backgroundImage: `url("${relatedService?.cat_banner_image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "350px",
    }}
>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="tp-breadcrumb-content text-center ">
                                <h3 className="tp-breadcrumb-title tp-char-animation " style={{color:"#fff"}}>
                                    {relatedService?.title}
                                </h3>

                                <div className="tp-breadcrumb-list mb-25">
                                    <span className="" style={{color:"#fff"}}>
                                        <Link href="/">Home</Link>
                                    </span>

                                    <span className="dvdr " style={{color:"#fff"}}><i>|</i></span>

                                    <span className="" style={{color:"#fff"}}>
                                        <Link href="/services">Services</Link>
                                    </span>

                                    <span className="dvdr " style={{color:"#fff"}}><i>|</i></span>

                                    <span className="" style={{color:"#fff"}}>
                                        <Link
                                            href={
                                                matchedParent
                                                    ? `/services-details/${matchedParent.slug}`
                                                    : "/services"
                                            }
                                        >
                                            {matchedParent?.title}
                                        </Link>
                                    </span>

                                    <span className="dvdr " style={{color:"#fff"}}><i>|</i></span>

                                    <span className="" style={{color:"#fff"}}>
                                        {relatedService.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== Intro (alternating) ========== */}
            <section
                className="tp-experience-area pt-80 pb-80"
                data-bg-color={bgIntro}
                style={{ backgroundColor: bgIntro ?? "#FFFFFF" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper mb-40">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <div className="md-section-content-wrapper">
                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">
                                        {relatedService?.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-1424 mb-40">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="tp-experience-left-wrapper">
                                <div className="tp-section-content-wrapper mb-40">
                                    <img
                                        src={relatedService?.website_image || "/assets/images/category/e-commerce.png"}
                                        alt={relatedService?.website_title || "Service image"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
                            <div className="tp-experience-wrapper tp-panel-pin-area pl-70">
                                <div className="tp-experience-item-wrapper tp-panel-pin" data-end="bottom 85%">
                                    <div className="row">
                                        {Array.isArray(relatedService?.website_des) &&
                                            relatedService.website_des.map((paragraph: string, index: number) => (
                                                <p key={index} style={{ textAlign: "justify" }}>{paragraph}</p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Leverage (alternating) ========== */}
            {willRenderLeverage && (
                <section
                    className="tp-experience-area pt-80 pb-80"
                    data-bg-color={bgLeverage}
                    style={{ backgroundColor: bgLeverage ?? "#F7F7F7" }}
                >
                    {relatedService.leverage_title && (
                        <div className="container container-1424">
                            <div className="md-section-content-top-wrapper mb-80">
                                <div className="row">
                                    <div className="col-xl-12 text-center md-section-content-wrapper">
                                        <h3
                                            className="cr-section-content-title md-section-title tp_fade_anim text-black"
                                            dangerouslySetInnerHTML={{ __html: relatedService.leverage_title }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {Array.isArray(relatedService.leverage) && relatedService.leverage.length > 0 && (
                        <div className="container container-1424">
                            <div className="row g-5">
                                {relatedService.leverage.map(
                                    (item: { icon: string; title: string; des: string }, index: number) => (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="service-wrapper7">
                                                <div className="line-top"></div>
                                                <div className="line-bottom"></div>

                                                <div className="icon">
                                                    <i
                                                        className={item.icon}
                                                        style={{ fontSize: 42, color: "#E1222E" }}
                                                    ></i>
                                                </div>

                                                <h3 className="mt-20" style={{ fontSize: "23px" }}>
                                                    {item.title}
                                                </h3>

                                                <p style={{ fontSize: "15px", textAlign: "justify", color: "#333333" }}>
                                                    {item.des}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* ========== Process (NOW ALTERNATING — no longer red) ========== */}
            <section
                className="tp-experience-area pt-80 pb-80"
                data-bg-color={bgProcess}
                style={{ backgroundColor: bgProcess ?? "#FFFFFF" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <div className="md-section-content-wrapper ">
                                    <h3
                                        className="cr-section-content-title md-section-title tp_fade_anim"
                                        dangerouslySetInnerHTML={{ __html: relatedService?.process_title || "" }}
                                    />
                                </div>
                                <p
                                    className="fs-20 tp_fade_anim"
                                    style={{
                                        textAlign: "center",
                                        display: "block",
                                        width: "100%",
                                        maxWidth: "1000px",
                                        margin: "0 auto",
                                        padding: "0 15px",
                                    }}
                                >
                                    {relatedService?.process_des}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-portfolio-area tp-portfolio-space-2 pt-60">
                    <div className="container container-1424">
                        <div className="row protfoliomargin gx-50 grid">
                            <div className="col-12 grid-item branding marketing">
                                <div className="tp-pr-item">
                                    <div className="row align-items-stretch portfolio-row">
                                        <div className="col-12 portfolio-column">
                                            <img
                                                src={relatedService?.process_image || "/assets/images/category/e-commerce.png"}
                                                alt={relatedService?.process_title || "Service image"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Expertise (alternating) ========== */}
            {willRenderExpertise && (
                <section
                    className="tp-experience-area pt-80 pb-60"
                    data-bg-color={bgExpertise}
                    style={{ backgroundColor: bgExpertise ?? "#F7F7F7" }}
                >
                    <div className="container container-1424">
                        <div className="md-section-content-top-wrapper ">
                            <div className="row">
                                <div className="col-xl-12 text-center ">
                                    <span className="md-section-subtitle mb-15 tp_fade_anim font-extrabold" style={{ fontWeight: "600" }}>
                                        {relatedService.expertise_heading}
                                    </span>
                                    <div className="md-section-content-wrapper mb-20">
                                        <h3
                                            className="cr-section-content-title md-section-title tp_fade_anim text-black"
                                            dangerouslySetInnerHTML={{ __html: relatedService?.expertise_title || "" }}
                                        />
                                    </div>
{Array.isArray(relatedService?.expertise_des) &&
    relatedService.expertise_des.map((paragraph: string, index: number) => (
        <p
            key={index}
            style={{ textAlign: "center", marginBottom: "3px" }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
        />
    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ========== Solution (alternating) ========== */}
            {willRenderSolution && (
                <section
                    className="tp-experience-area pt-60 pb-60"
                    data-bg-color={bgSolution}
                    style={{ backgroundColor: bgSolution ?? "#FFFFFF" }}
                >
                    <div className="container container-1424">
                        <div className="md-section-content-top-wrapper">
                            <div className="row">
                                <div className="col-xl-12 text-center">
                                    {relatedService.solution_title && (
                                        <>
                                            <span className="md-section-subtitle mb-15 tp_fade_anim font-extrabold" style={{ fontWeight: "600" }}>
                                                SOLUTION
                                            </span>
                                            <div className="md-section-content-wrapper">
                                                <h3
                                                    className="cr-section-content-title md-section-title tp_fade_anim text-black"
                                                    dangerouslySetInnerHTML={{ __html: relatedService.solution_title }}
                                                />
                                            </div>
                                        </>
                                    )}
                                    {relatedService.solution_des && (
                                        <p className="desc mt-20">{relatedService.solution_des}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {Array.isArray(relatedService.servicesbox) && relatedService.servicesbox.length > 0 && (
                        <div className="container container-1424 mt-60">
                            <div className="row g-5">
                                {relatedService.servicesbox.map(
                                    (item: { servicesbox_icon: string; servicesbox_tiitle: string; servicesbox_des: string }, index: number) => (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="service-wrapper7 solution">
                                                <div className="icon solutionbox">
                                                    <i
                                                        className={item.servicesbox_icon}
                                                        style={{ fontSize: 42, color: "#E1222E" }}
                                                    />
                                                </div>
                                                <h3 className="desc mt-20" style={{ fontSize: "23px" }}>
                                                    {item.servicesbox_tiitle}
                                                </h3>
                                                <p className="desc" style={{ fontSize: "15px", textAlign: "justify", color: "#333333" }}>
                                                    {item.servicesbox_des}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* ========== Portfolio (alternating) ========== */}
            <section
                className="tp-experience-area pt-60 pb-60"
                data-bg-color={bgPortfolio}
                style={{ backgroundColor: bgPortfolio ?? "#F7F7F7" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper ">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <span className="md-section-subtitle mb-15 tp_fade_anim font-extrabold" style={{ fontWeight: "600" }}>
                                    WHO WE SERVE
                                </span>
                                <div className="md-section-content-wrapper">
                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">
                                        E-Commerce <span className="text-red">Web Solution</span>
                                    </h3>
                                </div>
                                <p className="desc mt-20">
                                    Our vertical solutions expertise allows your business to streamline workflow, and increase productivity.
                                    No matter the business, Proactii Media LLP has you covered with industry compliant solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-instagram-area p-relative pt-80 ">
                    <div className="container container-1424">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            loop={false}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="related-service-card tp-instagram-img hovercat">
                                    <div className="category-service-image">
                                        <img src="/assets/images/category/blushhome.png" alt="Online Branding" />
                                    </div>
                                </div>
                                <h3 className="tp-process-inner-title titlecategory pt-10 pb-10">www.blushhomes.com</h3>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="related-service-card tp-instagram-img hovercat">
                                    <div className="category-service-image">
                                        <img src="/assets/images/category/copieronrent.png" alt="Online Branding" />
                                    </div>
                                </div>
                                <h3 className="tp-process-inner-title titlecategory pt-10 pb-10">www.copieronrent.com</h3>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="related-service-card tp-instagram-img hovercat">
                                    <div className="category-service-image">
                                        <img src="/assets/images/category/Kesariyafarm.png" alt="Online Branding" />
                                    </div>
                                </div>
                                <h3 className="tp-process-inner-title titlecategory pt-10 pb-10">www.kesariyafarm.com</h3>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="related-service-card tp-instagram-img hovercat">
                                    <div className="category-service-image">
                                        <img src="/assets/images/category/aic.png" alt="Online Branding" />
                                    </div>
                                </div>
                                <h3 className="tp-process-inner-title titlecategory pt-10 pb-10">www.aic.in</h3>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <p className="desc stopwastingtime mt-30" style={{ color: "#000" }}>
                        Stop wasting time and money on technology{" "}
                        <Link href="/about" className="explore-company-link">Explore our Company</Link>
                    </p>
                </div>
            </section>

            {/* ========== Social (FIXED background image — does NOT alternate) ========== */}
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
                        <div className="col-xl-12 text-center mb-4 mb-lg-0">
                            <div className="md-section-content-wrapper">
                                <h3 className="cr-section-content-title mb-20 md-section-title tp_fade_anim" style={{ color: "#0093C1" }}>
                                    Socialize with & Proactii Media LLP
                                </h3>
                            </div>
                            <p className="text-black mb-20 text-white">
                                Stay up-ta-date on social media and digital marketing innovations with Proactii Media LLP.
                            </p>
                            <div className="tp-footer-widget-social sociallink">
                                <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/" aria-label="Instagram" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/" aria-label="Facebook" className="social-link facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Custom IT (alternating) ========== */}
            <section
                className="tp-experience-area pt-80 pb-80"
                data-bg-color={bgCustomIT}
                style={{ backgroundColor: bgCustomIT ?? "#FFFFFF" }}
            >
                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper ">
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <span className="md-section-subtitle mb-15 tp_fade_anim font-extrabold" style={{ fontWeight: "600" }}>
                                    Custom IT services and solutions for your business
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-1424 mt-60">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-magnifying-glass fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Search Engine Optimization</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-center">
                                <div className="icon servicesolution d-flex align-items-start justify-content-center">
                                    <i className="fa-solid fa-indian-rupee-sign fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Pay Per Click Campaign</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-certificate fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Brand Identity</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-palette fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Logo Designing</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-pen-nib fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Graphic Design</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-shield-halved fs-1 flex-shrink-0" style={{ color: "#ffff" }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Web Application</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-earth-americas fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">Website Designing and Development</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="customsize text-center h-100 d-flex flex-column justify-content-start">
                                <div className="icon servicesolution d-flex align-items-start justify-content-start">
                                    <i className="fa-solid fa-cart-shopping fs-1" style={{ color: '#fff' }}></i>
                                    <h5 className="desc mt-0 mb-0 text-white">E-Commerce Web Solution</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Connect (FIXED background image — does NOT alternate) ========== */}
            <section
                className="tp-experience-area pt-80 pb-80"
                style={{
                    backgroundImage: "url('/assets/images/banner/connect.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#333",
                }}
            >
                <div className="container container-1424">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7 text-start mb-4 mb-lg-0">
                            <div className="md-section-content-wrapper">
                                <h3 className="cr-section-content-title mb-20 md-section-title tp_fade_anim text-black">
                                    We will help you overcome your <span style={{ color: "#0098C6" }}>technology challenges</span>
                                </h3>
                            </div>
                            <p className="text-black mb-0 text-black">
                                Call us on <strong style={{ color: "red" }}>(+91) 99247 03447</strong> email us at{" "}
                                <a href="mailto:mail@proactii.com" className="text-decoration-underline" style={{ color: "red" }}>
                                    <strong> mail@proactii.com </strong>
                                </a>{" "}
                                or fill out the following form to start the conversation.
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-5 text-lg-end text-start">
                            <a href="/contact" className="contact-hover-btn d-inline-flex align-items-center gap-2 px-4 py-3 rounded-1 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        </>
    );
}