
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="tp-footer-area cr-footer-style pt-120 pb-55 p-relative">
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
                    We are committed to helping you
                    <br />
                    succeed, and we will work with you
                    <br />
                    every step of the way.
                  </p>
                </div>

                {/* SOCIAL ICONS */}
                <div className="tp-footer-widget-social">
                  {/* Behance */}
                  <a href="#" aria-label="Behance">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.1924 5.83802H4.44141V7.23373H6.0782C6.37003 7.23373 6.6238 7.1576 6.6238 6.48512C6.6238 5.81264 6.1924 5.83802 6.1924 5.83802ZM6.1924 8.2488H4.44141V10.0252H6.09089C6.34466 10.0252 6.82681 9.92366 6.82681 9.16236C6.8395 8.26149 6.1924 8.2488 6.1924 8.2488Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.9778 0H4.00952C1.80174 0 0 1.80174 0 4.00952V11.9905C0 14.1856 1.80174 15.9873 4.00952 15.9873H11.9905C14.1983 15.9873 16 14.1856 16 11.9778V4.00952C15.9873 1.80174 14.1856 0 11.9778 0ZM9.38937 5.07534H12.0539V5.70975H9.38937V5.07534ZM8.14592 9.2498C8.14592 11.2292 6.19191 11.2926 6.19191 11.2926H3.0452V4.69469H6.17922C7.15623 4.69469 7.93021 5.25297 7.93021 6.4203C7.93021 7.58763 6.99128 7.65107 6.99128 7.65107C8.23473 7.63838 8.14592 9.2498 8.14592 9.2498ZM12.9294 9.13561H9.71927C9.71927 10.4044 10.8105 10.3029 10.8105 10.3029C11.8382 10.3029 11.8002 9.64314 11.8002 9.64314H12.8914C12.8914 11.4195 10.7724 11.3434 10.7724 11.3434C8.23473 11.3434 8.39968 8.84377 8.39968 8.84377C8.39968 8.84377 8.39968 6.33148 10.7724 6.33148C13.272 6.3188 12.9294 9.13561 12.9294 9.13561Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.7982 7.24414C9.8466 7.24414 9.70703 8.24652 9.70703 8.24652H11.7372C11.7372 8.24652 11.7499 7.24414 10.7982 7.24414Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* Pinterest */}
                  <a href="#" aria-label="Pinterest">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9275 3.98434C14.2121 2.75871 13.2417 1.78831 12.016 1.07293C10.7904 0.357595 9.45185 0 8.00031 0C6.54888 0 5.21029 0.357595 3.98467 1.07293C2.75886 1.7882 1.78845 2.7586 1.07311 3.98434C0.357596 5.21015 0 6.54862 0 8.00009C0 9.61823 0.440929 11.0872 1.3229 12.4064C2.20483 13.7261 3.36109 14.7017 4.79169 15.3337C4.76389 14.5906 4.80906 13.9761 4.92702 13.49L5.95836 9.13549C5.78469 8.79511 5.69789 8.37184 5.69789 7.86466C5.69789 7.2745 5.84708 6.78144 6.14575 6.38549C6.44442 5.98962 6.80895 5.79173 7.23955 5.79173C7.58667 5.79173 7.854 5.90629 8.04158 6.13542C8.22919 6.36466 8.3227 6.65282 8.3227 7.00013C8.3227 7.21525 8.2826 7.47751 8.2027 7.78654C8.12287 8.09561 8.01877 8.45324 7.89031 8.85955C7.76184 9.2657 7.66975 9.59057 7.61426 9.83342C7.5171 10.2569 7.59689 10.6198 7.85386 10.9221C8.11079 11.2241 8.4512 11.3753 8.87483 11.3753C9.61786 11.3753 10.2272 10.9622 10.703 10.1358C11.1787 9.30927 11.4165 8.30577 11.4165 7.12528C11.4165 6.2154 11.123 5.47576 10.5361 4.90648C9.94923 4.33697 9.13155 4.05209 8.08284 4.05209C6.90943 4.05209 5.95967 4.42888 5.23397 5.18234C4.50824 5.93592 4.14539 6.83704 4.14539 7.8856C4.14539 8.51067 4.32249 9.03508 4.67662 9.45857C4.79465 9.59743 4.83288 9.74673 4.79118 9.90657C4.77728 9.94828 4.74955 10.0524 4.70785 10.219C4.66633 10.3855 4.63842 10.4934 4.62462 10.5419C4.56913 10.7641 4.43709 10.8336 4.22876 10.7502C3.6941 10.528 3.28776 10.1426 3.01006 9.59397C2.73226 9.04533 2.59332 8.40979 2.59332 7.68774C2.59332 7.22244 2.66801 6.75717 2.81735 6.29194C2.96654 5.82653 3.19928 5.37696 3.51517 4.94289C3.83124 4.50871 4.20971 4.12499 4.65071 3.7918C5.09153 3.45851 5.62805 3.19118 6.26002 2.98978C6.89199 2.78838 7.57248 2.68768 8.30172 2.68768C9.288 2.68768 10.1732 2.90641 10.9579 3.34391C11.7428 3.78144 12.3416 4.34733 12.7549 5.04184C13.1683 5.73638 13.3746 6.47948 13.3746 7.27115C13.3746 8.31277 13.1941 9.25023 12.8331 10.0837C12.4721 10.917 11.9616 11.5715 11.3017 12.0471C10.6419 12.5229 9.89202 12.7608 9.05146 12.7608C8.62797 12.7608 8.23214 12.6617 7.86393 12.464C7.49597 12.266 7.24243 12.0317 7.1036 11.7608C6.79107 12.9898 6.60353 13.7226 6.541 13.9587C6.40906 14.4515 6.13827 15.0211 5.72846 15.6669C6.47156 15.8891 7.22846 16 7.99933 16C9.45076 16 10.7894 15.6424 12.015 14.927C13.2407 14.2118 14.2111 13.2414 14.9263 12.0157C15.6417 10.7899 15.9993 9.45127 15.9993 7.99995C15.9996 6.54862 15.6426 5.20996 14.9275 3.98434Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* Dribbble */}
                  <a href="#" aria-label="Dribbble">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" aria-label="LinkedIn">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9778 0H4.00952C1.80174 0 0 1.80174 0 4.00952V11.9905C0 14.1856 1.80174 15.9873 4.00952 15.9873H11.9905C14.1983 15.9873 16 14.1856 16 11.9778V4.00952C15.9873 1.80174 14.1856 0 11.9778 0ZM5.3291 12.9421H3.0452V6.34417H5.3291V12.9421ZM4.17447 5.3291C3.52736 5.3291 3.00714 4.80888 3.00714 4.16178C3.00714 3.51467 3.52736 2.99445 4.17447 2.99445C4.82157 2.99445 5.34179 3.51467 5.34179 4.16178C5.3291 4.80888 4.80888 5.3291 4.17447 5.3291ZM12.9548 12.9421H11.0389V9.74465C11.0389 8.97066 10.9374 7.98097 9.88422 7.98097C8.80571 7.98097 8.62807 8.8184 8.62807 9.69389V12.9421H6.72482V6.34417H8.50119V7.23236H8.55194C8.83109 6.72482 9.47819 6.33148 10.4933 6.33148C12.5868 6.33148 12.9548 7.53688 12.9548 9.32593V12.9421Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
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
                  Newsletter
                </h3>

                <div className="tp-footer-widget-content fs-15 mb-25">
                  <p>
                    Subscribe our newsletter to get the
                    <br />
                    latest news and updates!
                  </p>
                </div>

                <div className="tp-footer-widget-newsletter">
                  <form action="#">
                    <div className="tp-footer-widget-input p-relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Email address"
                      />

                      <span className="tp-footer-widget-envelope">
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25391 0.75H14.2852C15.1123 0.75 15.7891 1.42146 15.7891 2.24213V11.1949C15.7891 12.0156 15.1123 12.687 14.2852 12.687H2.25391C1.42676 12.687 0.75 12.0156 0.75 11.1949V2.24213C0.75 1.42146 1.42676 0.75 2.25391 0.75Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M15.7891 2.24219L8.26953 7.46464L0.75 2.24219"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <button
                        className="input-button"
                        type="submit"
                        aria-label="Subscribe"
                      >
                        <span>
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.5374 0.521289C17.086 0.0606643 16.418 -0.109704 15.7952 0.0705798L1.2705 4.26128C0.613322 4.44336 0.147522 4.96348 0.0220444 5.62332C-0.106141 6.29578 0.341605 7.15032 0.926563 7.50729L5.46811 10.2764C5.93391 10.5613 6.53512 10.4901 6.92058 10.1043L12.1211 4.9112C12.3829 4.63987 12.8162 4.63987 13.078 4.9112C13.3398 5.17171 13.3398 5.59628 13.078 5.8667L7.86843 11.0598C7.48207 11.4456 7.40985 12.0441 7.6942 12.5102L10.4691 17.0623C10.7941 17.6023 11.3538 17.9097 11.9676 17.9097C12.0399 17.9097 12.1211 17.9097 12.1933 17.8997C12.8974 17.8105 13.4571 17.3318 13.6647 16.6558L17.9707 2.26103C18.1603 1.64806 17.9887 0.981013 17.5374 0.521289Z"
                              fill="currentColor"
                            />

                            <path
                              opacity="0.4"
                              d="M6.72547 15.4543C6.98906 15.7184 6.98906 16.1465 6.72547 16.4105L5.49236 17.6407C5.36057 17.7731 5.18725 17.8389 5.01393 17.8389C4.8406 17.8389 4.66728 17.7731 4.53549 17.6407C4.27099 17.3766 4.27099 16.9494 4.53549 16.6854L5.76769 15.4543C6.03219 15.1912 6.46098 15.1912 6.72547 15.4543ZM6.01801 12.0405C6.28161 12.3046 6.28161 12.7327 6.01801 12.9967L4.78491 14.2269C4.65311 14.3593 4.47979 14.425 4.30647 14.425C4.13315 14.425 3.95983 14.3593 3.82803 14.2269C3.56354 13.9628 3.56354 13.5356 3.82803 13.2716L5.06023 12.0405C5.32473 11.7774 5.75352 11.7774 6.01801 12.0405ZM2.62273 10.9659C2.88632 11.23 2.88632 11.6581 2.62273 11.9221L1.38962 13.1523C1.25783 13.2847 1.08451 13.3505 0.911184 13.3505C0.737863 13.3505 0.564542 13.2847 0.432746 13.1523C0.168251 13.2847 0.168251 12.461 0.432746 12.197L1.66495 10.9659C1.92944 10.7028 2.35823 10.7028 2.62273 10.9659Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
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

