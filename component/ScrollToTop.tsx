"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* WhatsApp Button - Always Visible */}
            <a
                href="https://wa.me/09924703447"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                aria-label="Chat on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>

            {/* Scroll To Top - Visible After Scrolling */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
}