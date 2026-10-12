

"use client";


import { logos } from "@/constants/data";
import Image from "next/image";





import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function About() {
    const slides = [
        {
            image: "/assets/images/home/weare1.png",
            text: "INNOVATION", // Shortened to match your reference image style
        },
        {
            image: "/assets/images/home/weare2.png",
            text: "DEVELOPMENT",
        },
        {
            image: "/assets/images/home/weare3.png",
            text: "DIGITAL PRESENCE",
        },
    ];

    const teamMembers = [
        {
            name: "Manhar Nakhuva",
            role: "Founder",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Dainik Tandel",
            role: "Web developer",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Sonali Kharpade",
            role: "Graphic Designer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Trupal Patel",
            role: "Social Media Marketer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Roshani Mistry",
            role: "Web Developer",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Satish Patel",
            role: "App Developer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Nitin Patel",
            role: "Web Designer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Ramiya Nair",
            role: "SEO Executive",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop"
        }
    ];

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
                                    About Proactii Media LLP
                                </h3>

                                <div className="tp-breadcrumb-list mb-25 ">
                                    <span className="text-white">
                                        <a href="/">Home</a>
                                    </span>

                                    <span className="dvdr text-white  ">
                                        <i>|</i>
                                    </span>

                                    <span className="text-white">About Us</span>
                                </div>

                                <div className="tp-breadcrumb-scrolldown smooth">
                                    <a href="#about">
                                        <span>
                                            <svg
                                                width="16"
                                                height="9"
                                                viewBox="0 0 16 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L8 8L15 1"
                                                    stroke="#111013"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
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
                    <div className="md-section-content-top-wrapper mb-80">
                        <div className="row">

                            <div className="col-xl-12 text-center ">
                                <span className="md-section-subtitle  mb-20 tp_fade_anim">Our company</span>

                                <div className="md-section-content-wrapper  ">

                                    <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">We run all kinds of IT services that vow your <span style={{ color: "#0098C6" }}>success</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container container-1424">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="tp-experience-left-wrapper">
                                <div className="tp-section-content-wrapper mb-40">


                                    {/* --- START: The "10 Years" Element from Image --- */}
                                    <div className="tp-experience-badge d-flex align-items-center tp_fade_anim">
                                        <div className="tp-experience-number">
                                            10
                                        </div>
                                        <div >
                                            <p className="tp-experience-text">
                                                YEARS'<br />
                                                EXPERIENCE<br />
                                                IN IT
                                            </p>
                                        </div>

                                    </div>
                                    <p style={{ fontWeight: "600", color: "#0098C6" }} >Dream. Create. Deliver </p>
                                    <p className="textalign" >We Proactii Media LLP help individuals and corporate businesses to get started with a unique marketing strategies and creative ideas that represent your company’s mission and vision across the world in a more efficient and feasible manner.</p>
                                    <p className="textalign">Starting from 2011; our ambition is to become the most trusted & expert online brand development agency based in Vapi, Gujarat, Today we’ve been acknowledged as the best results driven by an inbound marketing industry from our respective clients.</p>



                                    {/* --- END: The "10 Years" Element --- */}

                                </div>
                            </div>
                        </div>
                        {/* RIGHT CONTENT */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="tp-experience-wrapper tp-panel-pin-area pl-70">

                                {/* ITEM ROW 1 */}


                                {/* ITEM ROW 2 */}
                                <div
                                    className="tp-experience-item-wrapper tp-panel-pin"
                                    data-end="bottom 85%"
                                >
                                    <div className="row">
                                        <p className="textalign">Team Proactii Media LLP nurture originality, imagination, explore, investigate and debate the underlying principles to design and develop the best possible outcome to achieve your business goals</p>
                                        <p className="textalign">At earlier. Proactii Media LLP began to offer services such as Website Development & Search Engine Optimization (SEO) within the state of Gujarat but now, the industry expanded and offer various other services like Pay Per Click (PPC), Social Media Optimization (SMO), Branding and so on in Vapi, Mumbai, Vadodara, UAE region also.</p>
                                        <p className="textalign">Moreover, Proactii Media LLP is known for consulting many corporate clients, agencies and small businesses with its years of experience about how to drive more sales, website traffic, lead generation, business/brand/product development. maintain online reputation, search engine optimization, and internet marketing to get tangible results.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ========== Vision, Mission, Approach & Values Start ========== */}
            <section className="neo-section pt-100 pb-80">
                <div className="container container-1424">
                    <div className="card-grid ">
                        {/* Card 1: Vision */}
                        <div className="neo-card ">
                            <div className="neo-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                We believe customers deserve the best products and services.
                                We build meaningful digital experiences that help businesses
                                grow and connect with their audiences.
                            </p>
                        </div>

                        {/* Card 2: Mission */}
                        <div className="neo-card">
                            <div className="neo-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                At Proactii Media LLP, we deliver creative digital solutions
                                tailored to business needs, helping our clients achieve
                                meaningful and sustainable growth.
                            </p>
                        </div>

                        {/* Card 3: Approach */}
                        <div className="neo-card">
                            <div className="neo-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                                </svg>
                            </div>
                            <h3>Our Approach</h3>
                            <p>
                                We understand your business goals, explore new ideas, and
                                develop customized strategies that reflect your brand
                                and deliver effective results.
                            </p>
                        </div>

                        {/* Card 4: Values */}
                        <div className="neo-card">
                            <div className="neo-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
                                    <line x1="2" y1="9" x2="22" y2="9" />
                                    <line x1="12" y1="22" x2="6" y2="3" />
                                    <line x1="12" y1="22" x2="18" y2="3" />
                                </svg>
                            </div>
                            <h3>Our Values</h3>
                            <p>
                                We believe in creativity, professionalism, transparency,
                                and long-term relationships. Our clients' success
                                remains at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            {/* ========== Vision, Mission, Approach & Values End ========== */}

            <section
                className="tp-experience-area pt-80 pb-80  "
                data-bg-color="#fff"
                style={{ backgroundColor: "#fff" }}
            >

                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper mb-80">
                        <div className="row">

                            <div className="col-xl-12 text-center ">


                                <div className="md-section-content-wrapper  ">

                                    <h3 className="cr-section-content-title  mb-20 md-section-title tp_fade_anim text-black">Why <span style={{ color: "#0098C6" }}>Proactii Media LLP</span></h3>
                                </div>
                                <span className="md-section-subtitle  tp_fade_anim">Passionate About Our Work</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-1424">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-xl-4 col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                            <div className="tp-experience-left-wrapper">
                                <div className="tp-section-content-wrapper mb-40">




                                    <p className="textalign" >Our design ethos is rooted in our aspiration to provide every client with something unique, a fresh perspective that blends both aesthetics and functionality. A wise man once rightly said, “In the world of design, minimalism has its place but so does the extravaganza.” So, some of our projects are inspired by the philosophy ‘less is more’ but for others, our approach is ‘just enough is more’. At Proactii Media LLP, we focus on developing impactful strategies tailor-made for each of our clients, retaining what is essential while letting go of the extraneous.</p>




                                </div>
                            </div>
                        </div>
                        {/* RIGHT CONTENT */}



                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="tp-experience-wrapper tp-panel-pin-area pl-70">
                                <div className="tp-experience-item-wrapper">
                                    <Swiper
                                        modules={[Autoplay, Pagination, Navigation]}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{ clickable: true }}
                                        navigation={true}
                                        speed={700}
                                    >
                                        {slides.map((slide, index) => (
                                            <SwiperSlide key={index}>

                                                <div className="experience-slide">
                                                    <Image
                                                        src={slide.image}
                                                        alt={`Proactii Media LLP - ${index + 1}`}
                                                        fill
                                                        className="experience-slide-image"
                                                        priority={index === 0}
                                                    />
                                                    <p className="experience-slide-text">
                                                        {slide.text}
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tp-experience-area pt-80 pb-80  "
                data-bg-color="#f7f7f7"

            >

                <div className="container container-1424">
                    <div className="md-section-content-top-wrapper mb-60">
                        <div className="row">

                            <div className="col-xl-12 text-center ">


                                <div className="md-section-content-wrapper  ">

                                    <h3 className="cr-section-content-title  mb-20 md-section-title tp_fade_anim text-black">Our experience <span style={{ color: "#0098C6" }}>experts Profile</span></h3>
                                </div>
                                <span className="md-section-subtitle mb-20 tp_fade_anim">GREAT PRODUCT STARTS WITH A GREAT TEAM</span>
                                <p >Proactii Media LLP leadership team has a long history of success in technology, business management, and franchising.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-1424">
                    <div className="row">

                        <div className="col-12">

                            <div className="tp-experience-left-wrapper">
                                <div className="tp-section-content-wrapper">



                                    {/* 2. Team Grid Container */}
                                    <div className="row justify-content-center g-4">
                                        {teamMembers.map((member, index) => (
                                            <div className="col-lg-3 col-md-4 col-12" key={index}>

                                                {/* --- TEAM CARD START --- */}
                                                <div className="team-card position-relative overflow-hidden rounded-4 shadow-lg">

                                                    {/* Image */}
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-100 h-100 object-fit-cover team-img"
                                                    />

                                                    {/* Gradient Overlay */}
                                                    <div className="gradient-overlay"></div>

                                                    {/* Text Content */}
                                                    <div className="team-content position-absolute bottom-0 w-100 text-center p-4">
                                                        <h4 className="text-white fw-bold mb-1">{member.name}</h4>
                                                        <p className="text-white-50 mb-0 small text-uppercase tracking-wider">
                                                            {member.role}
                                                        </p>
                                                    </div>

                                                </div>
                                                {/* --- TEAM CARD END --- */}

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            


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
                            <div className="md-section-content-wrapper  ">

                                <h3 className="cr-section-content-title  mb-20 md-section-title tp_fade_anim text-black">We will help you overcome your <br /> <span style={{ color: "#0098C6" }}>technology challenges</span></h3>
                            </div>

                            <p className="text-black mb-0 text-black">
                                Call us on <strong style={{ color: "red" }}>(+91) 99247 03447</strong> email us at{" "}
                                <a href="mailto:mail@proactii.com" className=" text-decoration-underline" style={{ color: "red" }}>
                                    <strong> mail@proactii.com </strong>
                                </a>{" "}
                                or fill out the following form to start the conversation.
                            </p>
                        </div>


                        <div className="col-xl-4 col-lg-5 text-lg-end text-start">
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

                <div className="cr-brand-area-2 cr-brand-style-3 tp-brand fix pt-60 pb-60" data-bg-color="#f7f7f7">
            
            
            
            
            
                    <div className="container-fluid p-0">
                      <div className="cr-brand-inner-wrap">
                        <div className="swiper cr-brand-logo-slide-active" data-bg-color="#fff">
                          <div className="swiper-wrapper slide-transition">
                            {logos.map((logo, index) => (
                              <div className="swiper-slide" key={index}>
                                {/* 1. Move sizing to the parent container */}
                                <div
                                  className="cr-brand-item-2"
                                  style={{
                                    width: "100%",
                                    height: "120px", // Adjust this height as needed
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "10px" // Adds space around the logo
                                  }}
                                >
                                  {/* 2. Image fills the container but keeps its shape */}
                                  <img
                                    src={`/assets/images/client/${logo}`}
                                    alt={logo.replace('.png', '')}
                                    style={{
                                      width: "80%",
                                      height: "100%",
                                      objectFit: "contain"
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
        </>
    );
}