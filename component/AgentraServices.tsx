"use client";


import { leftServices, rightServices } from "@/constants/data";

type ServiceItem = {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    active?: boolean;
};

function ServiceCard({ item }: { item: ServiceItem }) {
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