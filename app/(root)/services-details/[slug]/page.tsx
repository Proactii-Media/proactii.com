import { services } from "@/constants/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type ServiceDetailsProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({
    params,
}: ServiceDetailsProps) {
    const { slug } = await params;

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found | Proactii Media LLP",
        };
    }
}

export default async function ServiceDetails({
    params,
}: ServiceDetailsProps) {
    const { slug } = await params;

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    // Helper to get the hero heading based on service title
    const getServiceHeading = (title: string): string => {
        switch (title) {
            case "Online Branding":
                return "Our brands live at the heart of life";
            case "Website Development":
                return "Look like an expert right from the start:";
            case "Mobile App Development":
                return "Designing user-friendly mobile apps";
            default:
                return "We help you set and achieve your digital goal";
        }
    };

    return (
        <>
           
{/* Breadcrumb */}
<div
    className="tp-breadcrumb-area tp-breadcrumb-ptb include-bg"
    style={{
        backgroundImage: `url('${service.banner_image}')`,
    }}
>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-12">
                <div className="tp-breadcrumb-content text-center">
                    <h3 className="tp-breadcrumb-title tp-char-animation text-white">
                        {service.title}
                    </h3>

                    <div className="tp-breadcrumb-list mb-25">
                        <span className="text-white">
                            <Link href="/">Home</Link>
                        </span>

                        <span className="dvdr text-white">
                            <i>|</i>
                        </span>

                        <span className="text-white">
                            <Link href="/services">Services</Link>
                        </span>

                        <span className="dvdr text-white">
                            <i>|</i>
                        </span>

                        <span className="text-white">
                            {service.title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


            {/* Service Details */}
            <section
                className="tp-service-area tp-service-style-2 pb-80 pt-80"
                data-bg-color="#ffffff"
            >
                <div className="container container-1424">
                    <div className="tp-service-main-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div
                                    className="tp-service-thumbnail w-img pr-40 mb-40"
                                    data-fade-from="left"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            display: "block",
                                            borderRadius: "2%"
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="tp-service-content-wrap pl-40 mb-40">
                                    <div className="tp-section-content-wrapper mb-20">
                                        <span
                                            className="tp-section-subtitle mb-10"
                                            style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
                                        >
                                            {service.title}
                                        </span>

                                        <h2 className="cr-section-content-title tp-section-title-teko">
                                            {getServiceHeading(service.title)}
                                        </h2>
                                    </div>

                                    <div className="tp-service-section-text mb-30">
                                        {(Array.isArray(service.details)
                                            ? service.details
                                            : [service.details]
                                        ).map((paragraph: string, index: number) => (
                                            <p
                                                key={index}
                                                style={{
                                                    textAlign: "justify",
                                                    color: "rgba(17, 16, 19, 0.7)",
                                                    marginBottom: "20px",
                                                    lineHeight: "1.8",
                                                }}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    {(service.highlights?.length ?? 0) > 0 && (
                                        <ul
                                            className="service-highlights"
                                            style={{
                                                listStyleType: "disc",
                                                paddingLeft: "25px",
                                                marginTop: "20px",
                                            }}
                                        >
                                            {(service.highlights ?? []).map(
                                                (item: string, index: number) => (
                                                    <li
                                                        key={index}
                                                        style={{
                                                            display: "list-item",
                                                            marginBottom: "10px",
                                                            lineHeight: "1.7",
                                                            color: "rgba(3, 3, 3, 0.7)"
                                                        }}
                                                    >
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Process */}
            <section
                className="tp-process-area tp-process-space pt-80"
                data-bg-color="#0098C6"
            >
                <div className="container container-1424">
                    <div className="row">
                        <div className="tp-section-content-wrapper text-center mb-75">
                            <h2
                                className="cr-section-content-title tp-section-title-teko mb-20"
                                style={{ color: "#fff" }}
                            >
                                Our Working Process
                            </h2>
                        </div>
                    </div>

                    <div className="tp-process-inner-item-wrap tp-process-inner-border-top pb-80">
                        <div className="row">
                            {(service.process || []).map((step, index) => (
                                <div
                                    className="col-xl-3 col-md-6"
                                    key={`${service.id}-${step.title}`}
                                >
                                    <div
                                        className="tp-process-inner-item p-relative mb-40"
                                        data-delay={0.2 + index * 0.2}
                                    >
                                        <span className="tp-process-inner-dot"></span>

                                        <div
                                            className="tp-process-inner-content"
                                            style={{ textAlign: "center" }}
                                        >
                                            <h3 className="tp-process-inner-title mb-20">
                                                {step.title}
                                            </h3>

                                            <div className="tp-process-inner-text">
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="tp-instagram-area p-relative pt-80 pb-80">
                <div className="container container-1424">
                    <div className="row row-cols-lg-3 row-cols-4 g-3">
                        {service.relatedServices?.map(
                            (item: { title: string; image: string; link: string }) => (
                                <div className="col-lg-4 col-md-4 col-12" key={item.title}>
                                    <div className="related-service-card tp-instagram-img">
                                        <Link href={item.link} className="related-service-image">
                                            <img src={item.image} alt={item.title} />
                                        </Link>


                                        <a
                                            className="people-special-link bg-red related-service-read-more"
                                            href={item.link}
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
                                        </a>

                                    </div>
                                    <h3 className="tp-process-inner-title moreservice  pt-10 pb-10"  >
                                        {item.title}
                                    </h3>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

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