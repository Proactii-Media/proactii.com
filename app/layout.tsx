import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import ScrollToTop from "@/component/ScrollToTop";

export const metadata: Metadata = {
  title: "Proactii Media | IT Services & Digital Solutions",
  description: "Proactii Media - IT Services & Digital Solutions",
  icons: {
    icon: "/assets/images/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <head>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
  
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body>
        <Header />

        {children}
         <ScrollToTop />

        <Footer />

        {/* ThemeForest JS */}

        <Script
          src="/assets/js/vendor/jquery.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/swiper-bundle.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/bootstrap-bundle.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/plugin.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/three.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/ripples.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/hover-effect.umd.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/split-type.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/webgl.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/Observer.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/magnific-popup.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/purecounter.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/ajax-form.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/slider-active.js"
          strategy="afterInteractive"
        />

        {/* <Script
          src="/assets/js/tp-cursor.js"
          strategy="afterInteractive"
        /> */}

        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />

        <Script
          type="module"
          src="/assets/js/distortion-img.js"
          strategy="afterInteractive"
        />
       
      </body>
    </html>
  );
}