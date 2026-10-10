"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
  


      {/* =================== ABOUT COMPANY =================== */}
  
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              {/* Image */}
              <div className="relative">
                <Image
                  src="/shubhamimages/about/about1.png"
                  alt="Subham Moulds and Engineering"
                  width={696}
                  height={626}
                  className="h-auto w-full"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=S_A7nr8nFeI"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E80028] text-white shadow-lg transition hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch company video"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                  About Our Company
                </h2>

                <h2 className="mb-6 text-xl font-semibold leading-snug text-gray-800 md:text-2xl">
                  Advanced Automatic Assembly Machines{" "}
                  <span className="text-[#E80028]">
                    Manufacturer &amp; Exporter
                  </span>
                </h2>

                <p className="mb-4 text-justify text-gray-700">
                  The foundation of{" "}
                  <strong>
                    SUBHAM MOULDS &amp; ENGINEERING – DAMAN, INDIA
                  </strong>{" "}
                  was laid in 2012 in a modest 150-square-foot workspace.
                  Our journey, which began with labor jobs and small-scale
                  tasks, stands as a unique testament to patience,
                  dedication, and hard work. We closely understood the
                  fundamental challenges of the market and prioritized
                  quality in every task, no matter how small.
                </p>

                <p className="text-justify text-gray-700">
                  Over the years, our commitment to engineering excellence
                  and customer satisfaction has enabled us to grow into a
                  trusted manufacturer and exporter of automatic assembly
                  machines, special purpose machines, automation systems,
                  testing machines, filling machines, and packaging
                  solutions. Today, we continue to develop reliable,
                  precision-engineered machinery designed to meet the
                  evolving requirements of industries in India and global
                  markets.
                </p>
              </div>

            </div>
          </div>
        </section>

   
 
    </>
  );
}