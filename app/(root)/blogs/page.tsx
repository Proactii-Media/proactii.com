

"use client";

import { blogPosts } from "@/constants/data";

export default function Blogs() {

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
                                    Our Blog
                                </h3>

                                <div className="tp-breadcrumb-list mb-25 ">
                                    <span className="text-white">
                                        <a href="/">Home</a>
                                    </span>

                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">Blog</span>
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

                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">IT Blog</h3>
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
                                    Explore the NanoSoft IT Blog for valuable insights and thought leadership on industry
                                    best practices in managed IT services and enterprise IT trends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tp-blog-gird-sidebar-ptb pb-80">
                <div className="container container-1424">
                    <div className="row gx-30">
                        {blogPosts.map((post) => (
                            <div className="col-md-4" key={post.id}>
                                <div className="tp-blog-masonry-item ">

                                    {/* Blog Image */}
                                    <div className="tp-blog-masonry-thumb mb-30">
                                        <a href={`/blog-details/${post.slug}`}>
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>

                                    {/* Author and Date */}
                                    <div className="tp-blog-masonry-item-top d-flex justify-content-between align-items-center mb-25">

                                        <div className="tp-blog-masonry-item-user d-flex align-items-center">
                                            <div className="tp-blog-masonry-item-user-content">
                                                <span>{post.author}</span>
                                            </div>
                                        </div>

                                        <div className="tp-blog-masonry-item-time">
                                            <span
                                                className="blog-date"
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="5"
                                                        width="18"
                                                        height="16"
                                                        rx="2.5"
                                                    />
                                                    <path d="M7 3v4M17 3v4M3 10h18" />
                                                    <path d="M7.5 14h.01M12 14h.01M16.5 14h.01M7.5 17.5h.01M12 17.5h.01" />
                                                </svg>

                                                {new Date(
                                                    `${post.date}T12:00:00`
                                                ).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "2-digit",
                                                    year: "numeric",
                                                    timeZone: "UTC",
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="tp-blog-masonry-content">
                                        <h3 className="tp-blog-masonry-title">
                                            <a
                                                className="tp-line-black"
                                                href={`/blog-details/${post.slug}`}
                                            >
                                                {post.title}
                                            </a>
                                        </h3>

                                        <div className="tp-blog-masonry-btn">
                                            <a
                                                className="people-special-link bg-red" href={`/blog-details/${post.slug}`}
                                            >Read more
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}