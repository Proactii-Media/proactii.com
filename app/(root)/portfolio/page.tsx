

"use client";
import Link from "next/link";
import { portfolioData } from "@/constants/data";


export default function Portfolio() {

    return (
        <>
            {/* ========== Breadcrumb Start Section ========== */}
            <div
                className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
                data-background="/assets/images/banner/about1.png"
                style={{
                    backgroundImage: "url('/assets/images/banner/about1.png')",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="tp-breadcrumb-content text-center ">
                                <h3 className="tp-breadcrumb-title tp-char-animation text-white">
                                    Our Portfolio
                                </h3>

                                <div className="tp-breadcrumb-list mb-25 ">
                                    <span className="text-white">
                                        <a href="/">Home</a>
                                    </span>

                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">Portfolio</span>
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

                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">Creativity That Creates Impact</h3>
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
                                    Explore our portfolio of creative designs, innovative websites, and digital solutions crafted to strengthen brands, engage audiences, and drive business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


<div className="tp-portfolio-area tp-portfolio-space-2 pb-90">
    <div className="container container-1424">
        <div className="row protfoliomargin gx-50 grid">
            {portfolioData.map((item) => (
                <div
                    key={item.id}
                    className={`col-6 col-md-6 col-12 grid-item ${item.classes}`}
                >
                    <div className="tp-pr-item">
                        {/* Image Top */}
                        <div className="tp-pr-thumb">
                            <img src={item.image} alt={item.alt} />
                        </div>

                        {/* Text Below Image */}
                        <div className="tp-pr-content">
                            <h3 className="tp-pr-title fs-34 tp-blog-masonry-title text-white">
                                {item.title}
                            </h3>

                            <div className="tp-pr-meta">
                                <span className="text-white">{item.category}</span>
                                <span className="text-white">{item.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

        </>
    );
}