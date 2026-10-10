"use client";

import {
    Asterisk,
    PieChart,
    Award,
    IndianRupee,
    Settings,
    Users,
    Rocket, // Added new icon
} from "lucide-react";

const leftServices = [
    {
        title: "Proven Results",
        description:
            "We don’t boast about our services. On the contrary, we let our results speak for themselves. We deliver what we promised.",
        icon: PieChart,

    },
    {
        title: "Cost Effective",
        description:
            "We will try not to burn a hole in your pocket. We offer a range of marketing services at reasonable prices.",
        icon: IndianRupee,
    },
    {
        title: "Strong Teamwork",
        description:
            "Our versatile and talented team of digital marketers collaborate with each other to provide you with the best results.",
        icon: Users,
    },
];

const rightServices = [
    {
        title: "Standard of Excellence",
        description:
            "Every day our team will strive to meet your standard of excellence and do our best to exceed expectations.",
        icon: Award,
    },
    {
        title: "Spectrum of Services",
        description:
            "We ensure you meet all your digital marketing needs under one roof, including SEO, SMM, PPC, web design and development, and more.",
        icon: Settings,
    },

    {
        title: "Dedicated Support",
        description:
            "We provide 24/7 dedicated support to ensure your business runs smoothly and your questions are always answered.",
        icon: Rocket,
    },
];

function ServiceCard({ item }) {
    const Icon = item.icon;

    return (
        <div className={`agentra-card ${item.active ? "active" : ""}`}>
            <div
                className={`agentra-card-icon ${item.active ? "icon-blue" : "icon-dark"
                    }`}
            >
                <Icon size={28} strokeWidth={1.8} />
            </div>

            <h3>{item.title}</h3>
            <p className="textalign">{item.description}</p>
        </div>
    );
}

export default function AgentraServices() {
    return (
        <section className="agentra-section">
            {/* Background circles */}
            <div className="agentra-bg-circle agentra-bg-large" />
            <div className="agentra-bg-circle agentra-bg-medium" />

            <div className="agentra-layout">
                {/* Left column */}
                <div className="agentra-column agentra-column-left">
                    {leftServices.map((item) => (
                        <ServiceCard key={item.title} item={item} />
                    ))}
                </div>

                {/* Center logo */}
                <div className="agentra-center-logo">
                    <span className="md-section-subtitle  mb-20 tp_fade_anim">Why choose us</span>

                    <div className="md-section-content-wrapper  ">

                        <h3 className="cr-section-content-title md-section-title tp_fade_anim text-black">5 REASONS TO US<br /> <span style={{ color: "#0098C6" }}>PARTNER WITH US</span></h3>
                    </div>
                </div>

                {/* Right column */}
                <div className="agentra-column agentra-column-right">
                    {rightServices.map((item) => (
                        <ServiceCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}