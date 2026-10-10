"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* =========================
                MOBILE OFFCANVAS
            ========================== */}
            <div
                className={`tp-offcanvas-area ${mobileMenuOpen ? "opened" : ""
                    }`}
            >
                <div className="tp-offcanvas-wrapper">

                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <img
                                    className="logo-1"
                                    src="/assets/images/logo.png"
                                    alt="Proactii Media"
                                />
                            </Link>
                        </div>

                        <div className="tp-offcanvas-close">
                            <button
                                type="button"
                                className="tp-offcanvas-close-btn"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg
                                    width="37"
                                    height="38"
                                    viewBox="0 0 37 38"
                                    fill="none"
                                >
                                    <path
                                        d="M9.19141 9.80762L27.5762 28.1924"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.19141 28.1924L27.5762 9.80761"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="tp-offcanvas-main">

                        <div className="tp-offcanvas-content d-none d-xl-block">
                            <h3 className="tp-offcanvas-title">
                                Hello There!
                            </h3>

                            <p>
                                We create modern digital solutions that help
                                businesses grow.
                            </p>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="tp-offcanvas-menu d-xl-none">
                            <nav>
                                <ul>

                                    <li>
                                        <Link
                                            href="/"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/about"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            About Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="#"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="#"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Portfolio
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="#"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/contact"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Contact
                                        </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        {/* Gallery */}
                        <div className="tp-offcanvas-gallery d-none d-xl-block">
                            <div className="row gx-2">

                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        className="col-md-3 col-3"
                                        key={item}
                                    >
                                        <div className="tp-offcanvas-gallery-img fix">
                                            <img
                                                src={`/assets/img/offcanvas/offcanvas-${item}.jpg`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Contact */}
                        <div className="tp-offcanvas-contact">
                            <h3 className="tp-offcanvas-title sm">
                                Information
                            </h3>

                            <ul>
                                <li>
                                    <a href="tel:+919924703447">
                                        +91 99247 03447
                                    </a>
                                </li>

                                <li>
                                    <a href="mailto:mail@proactii.com">
                                        E: mail@proactii.com
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.google.com/maps/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        206-A, Platinum Commercial Center, Via Char Rasta Rd, opp. VIA Ground, GIDC, Vapi, Gujarat 396195
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`body-overlay ${mobileMenuOpen ? "opened" : ""
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* =========================
                HEADER
            ========================== */}
            <header>

                <div
                    id="header-sticky"
                    className=" cr-hero-area paste-bg tp-header-4-area tp-header-4-style sticky-white-bg tp-header-plr pr-130 pl-130"
                >

                    <div className="container-fluid p-0">

                        {/* TOP BAR */}
                        <div className="tp-header-top tp-header-top-border d-none d-xl-block">

                            <div className="p-1 row gx-0 align-items-center justify-content-between">

                                <div className="col-xl-4">
                                    <div className="tp-header-welcome-text mb-15">
                                        <p>
                                            Welcome to Proactii Media
                                        </p>
                                    </div>
                                </div>

                                <div className="col-xl-8">
                                    <div className="tp-header-contact-info d-flex justify-content-end mb-15">

                                        <a href="mailto:info@proactii.com" >
                                            <i className="fa-solid fa-envelope"></i>
                                            <span style={{
                                                marginLeft: "7px",
                                            }} >Email:</span>
                                            info@proactii.com
                                        </a>

                                        <a href="tel:+919924703447">
                                            <i className="fa-solid fa-phone"></i>
                                            <span style={{
                                                marginLeft: "7px",
                                            }}>Call:</span>
                                            +91 99247 03447
                                        </a>

                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* MAIN HEADER */}
                        <div className="row gx-0 align-items-center">

                            {/* LOGO */}
                            <div className="col-xl-2 col-lg-6 col-4">

                                <div className="tp-header-logo">

                                    <Link href="/">

                                        <img
                                            data-width="150"
                                            className="logo-white"
                                            src="/assets/images/white_logo.png"
                                            alt="Proactii Media"
                                        />

                                        <img
                                            data-width="150"
                                            className="logo-black"
                                            src="/assets/images/logo.png"
                                            alt="Proactii Media"
                                        />

                                    </Link>

                                </div>

                            </div>

                            {/* MENU */}
                            <div className="col-xl-10 col-lg-6 col-8">

                                <div className="tp-header-box d-flex justify-content-xl-between justify-content-end align-items-center pl-40">

                                    <div className="tp-header-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block">

                                        <nav>
                                            <ul>

                                                {/* HOME */}
                                                <li>
                                                    <Link href="/">
                                                        Home
                                                    </Link>
                                                </li>

                                                {/* ABOUT */}
                                                <li className="has-dropdown">

                                                    <Link href="/about">
                                                        About Us
                                                    </Link>

                                                    <ul className="tp-submenu submenu">

                                                        <li>
                                                            <Link href="/about">
                                                                About Us
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link href="#">
                                                                Our Team
                                                            </Link>
                                                        </li>

                                                    </ul>

                                                </li>

                                                {/* SERVICES */}
                                                <li className="has-dropdown">

                                                    <Link href="#">
                                                        Services
                                                    </Link>

                                                    <ul className="tp-submenu submenu">

                                                        <li>
                                                            <Link href="#">
                                                                Web Development
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link href="#">
                                                                Mobile App Development
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link href="#">
                                                                Digital Marketing
                                                            </Link>
                                                        </li>

                                                    </ul>

                                                </li>

                                                {/* PORTFOLIO */}
                                                <li className="has-dropdown">

                                                    <Link href="#">
                                                        Portfolio
                                                    </Link>

                                                    <ul className="tp-submenu submenu">

                                                        <li>
                                                            <Link href="#">
                                                                All Projects
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link href="#">
                                                                Websites
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link href="#">
                                                                Mobile Apps
                                                            </Link>
                                                        </li>

                                                    </ul>

                                                </li>

                                                {/* BLOG */}
                                                <li>
                                                    <Link href="#">
                                                        Blog
                                                    </Link>
                                                </li>

                                                {/* CONTACT */}
                                                <li>
                                                    <Link href="/contact">
                                                        Contact
                                                    </Link>
                                                </li>

                                            </ul>
                                        </nav>

                                    </div>

                                    {/* RIGHT SIDE */}
                                    <div className="tp-header-right">

                                        <div className="tp-header-right-wrap align-items-center d-flex justify-content-end">

                                            {/* PHONE */}
                                            <div className="tp-header-contact-number mr-45 d-none d-xxl-block">

                                            </div>

                                            {/* BUTTON */}
                                            <div className="tp-header-btn-wrap d-none d-xl-block">

                                                <Link
                                                    href="/contact"
                                                    className="tp-btn-yellow-square"
                                                        style={{
            display: "inline-flex",       /* Forces items into a row */
            alignItems: "center",         /* Vertically centers the text and arrow */
            gap: "10px",                  /* Adds space between text and arrow */
            flexDirection: "row",         /* Ensures horizontal layout */
            textDecoration: "none"        /* Removes underline from link */
        }}
                                                >
                                                    Let's Talk

                                                    <span>
                                                        <svg
                                                            width="18"
                                                            height="10"
                                                            viewBox="0 0 18 10"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.29231 0C10.773 2.00217 14.7748 3.89283 18 5.00061C14.7748 6.10761 10.7731 7.99749 8.29278 10L10.0219 5.5746L0.619514 5.57487C0.455171 5.57467 0.297634 5.51408 0.181516 5.40642C0.0948336 5.32613 0.0358078 5.22386 0.011901 5.11253C-0.0120059 5.0012 0.00027696 4.8858 0.0472025 4.78093C0.0941274 4.67606 0.173586 4.58643 0.275531 4.52336C0.377475 4.46029 0.497332 4.42662 0.619946 4.4266L10.022 4.42665L8.29231 0Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>

                                                </Link>

                                            </div>

                                            {/* MOBILE MENU BUTTON */}
                                            <div className="tp-header-bar-wrap d-xl-none ml-30">

                                                <button
                                                    type="button"
                                                    className="tp-header-white-bar tp-offcanvas-open-btn d-flex align-items-center"
                                                    onClick={() =>
                                                        setMobileMenuOpen(true)
                                                    }
                                                    aria-label="Open menu"
                                                >
                                                    <span>
                                                        <i></i>
                                                        <i></i>
                                                    </span>
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>
        </>
    );
}


hjgjhgjh