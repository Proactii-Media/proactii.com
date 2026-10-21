
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/constants/data";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        return {
            title: "Blog Not Found | Proactii Media LLP",
        };
    }

    const description =
        post.excerpt ||
        (typeof post.content === "string"
            ? post.content
            : post.content
                ?.find((item) => item.type === "paragraph")
                ?.text) ||
        post.title;

    return {
        title: `${post.title} | Proactii Media LLP`,
        description: description.slice(0, 160),
    };
}

export default async function BlogDetailsPage({ params }) {
    const { slug } = await params;

    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(
        `${post.date}T12:00:00Z`
    ).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    });

    // Support both string content and structured content.
    const contentItems =
        typeof post.content === "string"
            ? [{ type: "paragraph", text: post.content }]
            : post.content || [];

    return (
        <>
            <div
                className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
                style={{
                    backgroundImage:
                        "url('/assets/images/banner/about1.png')",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="tp-breadcrumb-content text-center">
                                <h1 className="tp-breadcrumb-title text-white">
                                    Blog Details
                                </h1>

                                <div className="tp-breadcrumb-list mb-25">
                                    <Link href="/" className="text-white">
                                        Home
                                    </Link>

                                    <span className="dvdr text-white">
                                        {" | "}
                                    </span>

                                    <Link href="/blog" className="text-white">
                                        Blog
                                    </Link>

                                    <span className="dvdr text-white">
                                        {" | "}
                                    </span>

                                    <span className="text-white">
                                        Details
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Details Section */}
            <section
                id="postbox"
                className="postbox-area p-relative pt-80 sm-pt-30 bg-no-repeat"
            >
                <div className="container container-1720 p-0">
                    <div className="row gx-0 justify-content-center">
                        <div className="col-xl-8">
                            <div className="tp-postbox-details-top p-relative">
                                <div className="postbox-details-item">
                                    <div className="postbox-details-info-wrap">
                                        <div className="row align-items-center">

                                            <div className="col-xl-2 col-md-2 col-4">
                                                <div className="postbox-author-box d-flex align-items-center">


                                                    <div className="postbox-author-meta">
                                                        <h4 className="postbox-author-name">
                                                            <span>{post.author}</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-md-2 col-3 vertical-divider">
                                                <div className="postbox-meta">
                                                    <h4 className="postbox-author-name">
                                                        {formattedDate}
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="col-xl-8 col-md-8 col-5 vertical-divider">
                                                <div className="postbox-meta">
                                                    <h4 className="postbox-author-name">
                                                        {post.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="postbox-details-thumb mb-45 blog-details-image">
                                <Image
                                    className="w-100"
                                    src={post.image}
                                    alt={post.title}
                                    width={1400}
                                    height={400}
                                    priority
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-1200">
                    <div className="row">

                        {/* Social Links */}
                        <div className="col-xl-2 col-lg-2">
                            <div className="tp-footer-widget-social mb-30">
                                <ul className="social-stack-mobile">
                                    <li>
                                        <a
                                            style={{ marginBottom: "20px" }}
                                            href="https://www.linkedin.com/"
                                            aria-label="LinkedIn"
                                            className="social-link linkedin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            style={{ marginBottom: "20px" }}
                                            href="https://www.instagram.com/"
                                            aria-label="Instagram"
                                            className="social-link instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            style={{ marginBottom: "20px" }}
                                            href="https://www.facebook.com/"
                                            aria-label="Facebook"
                                            className="social-link facebook"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* Blog Content */}
                        <div className="col-xl-8 col-lg-10">
                            <div className="postbox-wrapper mb-115">

                                <div className="postbox-details-text mb-20">
                                    <h1 className="cr-section-content-title">
                                        {post.title}
                                    </h1>
                                    {post.excerpt && (
                                        <p>{post.excerpt}</p>
                                    )}
                                </div>

                                {contentItems.map((item, index) => (
                                    <div
                                        key={`${post.slug}-${index}`}
                                        className="postbox-details-text mb-10"
                                    >
                                        {/* Paragraph */}
                                        {item.type === "paragraph" && (
                                            <p>{item.text}</p>
                                        )}

                                        {/* Heading */}
                                        {item.type === "heading" && (
                                            <h5 className="blog-subheading">{item.text}</h5>
                                        )}

                                        {/* Bullet List */}
                                        {item.type === "bullets" && (
                                            <ul>
                                                {item.items?.map(
                                                    (text, i) => (
                                                        <li key={i}>
                                                            {text}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}

                                        {/* Numbered List */}
                                        {item.type === "numbered" && (
                                            <ol>
                                                {item.items?.map(
                                                    (text, i) => (
                                                        <li key={i}>
                                                            {text}
                                                        </li>
                                                    )
                                                )}
                                            </ol>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Articles Section */}
            <section className="tp-blog-gird-sidebar-ptb pt-80 pb-80">
                <div className="container container-1424">
                    <div className="row gx-30">
                        <div className="col-12 mb-40">
                            <h2 className="cr-section-content-title">
                                More Articles
                            </h2>
                        </div>
                        {blogPosts.length > 1 &&
                            Array.from(
                                { length: Math.min(3, blogPosts.length - 1) },
                                (_, index) => {
                                    const currentIndex = blogPosts.findIndex(
                                        (item) => item.slug === post.slug
                                    );

                                    const nextIndex =
                                        (currentIndex + index + 1) % blogPosts.length;

                                    return blogPosts[nextIndex];
                                }
                            ).map((item) => (
                                <div className="col-md-4" key={item.id}>
                                    <div className="tp-blog-masonry-item">

                                        {/* Blog Image */}
                                        <div className="tp-blog-masonry-thumb mb-30">
                                            <Link href={`/blog-details/${item.slug}`}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={500}
                                                    height={300}
                                                    loading="lazy"
                                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                                                    style={{
                                                        width: "100%",
                                                        height: "220px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </Link>
                                        </div>

                                        {/* Author and Date */}
                                        <div className="tp-blog-masonry-item-top d-flex justify-content-between align-items-center mb-25">
                                            <div className="tp-blog-masonry-item-user d-flex align-items-center">
                                                <div className="tp-blog-masonry-item-user-content">
                                                    <span>{item.author}</span>
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
                                                        `${item.date}T12:00:00Z`
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
                                                <Link
                                                    className="tp-line-black"
                                                    href={`/blog-details/${item.slug}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </h3>

                                            {/* Read More Button */}
                                            <div className="tp-blog-masonry-btn">
                                                <Link
                                                    className="people-special-link bg-red"
                                                    href={`/blog-details/${item.slug}`}
                                                >
                                                    Read more
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
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

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
                            <div className="md-section-content-wrapper  ">
                                <h3 className="cr-section-content-title  mb-20 md-section-title tp_fade_anim text-white">We will help you overcome your  <span style={{ color: "#0098C6" }}>technology challenges</span></h3>
                            </div>
                            <p className="text-black mb-0 text-white">
                                Call us on <strong style={{ color: "#EDBC31" }}>(+91) 99247 03447</strong> email us at{" "}
                                <a href="mailto:mail@proactii.com" className=" text-decoration-underline" style={{ color: "#EDBC31" }}>
                                    <strong> mail@proactii.com </strong>
                                </a>{" "}
                                or fill out the following form to start the conversation.
                            </p>
                        </div>


                        <div className="col-xl-4 col-lg-4 col-12 text-lg-end text-start">
                            <a href="/contact" className="contact-hover-btn d-inline-flex align-items-center gap-2 px-4 py-3 rounded-1 shadow-sm">
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
        </>
    );
}
