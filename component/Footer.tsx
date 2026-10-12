
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="tp-footer-area cr-footer-style pt-80 pb-55 p-relative">
        <div className="container container-1424">
          <div className="row">
            {/* LOGO + ABOUT */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-footer-widget mb-40 tp_fade_anim">
                <div className="tp-footer-logo mb-25">
                  <Link href="/">
                    <img
                      data-width="150"
                      src="/assets/images/logo.png"
                      alt="Proactii Media"
                    />
                  </Link>
                </div>

                <div className="tp-footer-widget-content mb-35">
                  <p>
                    Proactii Media LLP has pioneered IT services in Vapi, Gujarat based for 9 years, consistently delivering business value with the latest technology. We are on a mission to exceed your expectations and form a long-term, mutually beneficial relationship with you.
                  </p>
                </div>

                {/* SOCIAL ICONS */}
                <div className="tp-footer-widget-social">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="LinkedIn"
                    className="social-link linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    className="social-link instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    className="social-link facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div
                className="tp-footer-widget cr-footer-col-2 mb-40 tp_fade_anim"
                data-deley="0.1"
              >
                <h3 className="tp-footer-widget-title mb-25">Services</h3>

                <div className="tp-footer-widget-menu">
                  <ul>
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
                    <li>
                      <Link href="#">
                        UI/UX Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Software Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div
                className="tp-footer-widget cr-footer-col-3 mb-40 tp_fade_anim"
                data-deley="0.2"
              >
                <h3 className="tp-footer-widget-title mb-25">Company</h3>

                <div className="tp-footer-widget-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div
                className="tp-footer-widget cr-footer-col-4 mb-40 tp_fade_anim"
                data-deley="0.3"
              >
                <h3 className="tp-footer-widget-title mb-25">
                  Office Address
                </h3>

                <div className="tp-footer-widget-content fs-15 mb-25">
                  <p>
                    206-A, Platinum Commercial Center, Via Char Rasta Rd, opp. VIA Ground, GIDC, Vapi, Gujarat 396195
                  </p>
                </div>

                <ul className="footer-contact-list list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-15">
                    <span className="footer-contact-icon me-15">
                      {/* Phone icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <a href="tel:09924703447" className="footer-contact-link">099247 03447</a>
                  </li>

                  <li className="d-flex align-items-center mb-15">
                    <span className="footer-contact-icon me-15">
                      {/* Mail icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <a href="mailto:mail@proactii.com" className="footer-contact-link">mail@proactii.com</a>
                  </li>

                  <li className="d-flex align-items-center">
                    <span className="footer-contact-icon me-15">
                      {/* Globe icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </span>
                    <a href="https://www.proactii.com" target="_blank" rel="noopener noreferrer" className="footer-contact-link footer-contact-website">
                      www.proactii.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="tp-copyright-area cr-footer-style tp-copyright-border-top pb-35 pt-30">
        <div className="container container-1424">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="tp-copyright-content text-center text-lg-start">
                <p>
                  All rights reserved — 2026 ©{" "}
                  <Link href="/">Proactii Media</Link>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="md-copyright-right text-center text-md-end">
                <Link href="/terms-and-conditions">
                  Terms and Conditions
                </Link>

                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

