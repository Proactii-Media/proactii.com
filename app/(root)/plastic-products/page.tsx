"use client";

import { useState } from "react";
import Link from "next/link";

import { plasticproduct } from "@/constants/data";

export default function plasticproducts() {
    const [activeFilter, setActiveFilter] = useState("");

    const productTypes = [
        ...new Map(
            plasticproduct.map((item) => [
                item.category,
                {
                    category: item.category,
                    type: item.type,
                },
            ])
        ).values(),
    ];

    const filteredplasticproduct =
        activeFilter === ""
            ? plasticproduct
            : plasticproduct.filter(
                  (product) => product.category === activeFilter
              );

    return (
        <>
            {/* BANNER */}
            <div
                className="dlab-bnr-inr text-center bg-pt"
                style={{
                    backgroundImage:
                        "url('/shubhamimages/banner/productbanner.png')",
                }}
            >
                <div className="container">
                    <div className="dlab-bnr-inr-entry align-m text-center">

                        <h1 className="text-white mb-3">
                            Engineering plasticproduct
                        </h1>

                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>

                                <li>
                                    Engineering plasticproduct
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


            {/* plasticproduct */}
            <div className="content-block">

                <div
                    className="section-full content-inner-2 portfolio text-uppercase bg-gray"
                    id="portfolio"
                >

                    <div className="container">

                        {/* FILTER */}
                        <div className="site-filters clearfix center m-b40">

                            <ul className="filters">

                                {/* ALL */}
                                <li
                                    className={`btn ${
                                        activeFilter === "" ? "active" : ""
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setActiveFilter("")}
                                        className="site-button-secondry button-sm radius-xl"
                                    >
                                        <span>All</span>
                                    </button>
                                </li>


                                {/* UNIQUE PRODUCT TYPES */}
                                {productTypes.map((productmenu, index) => (

                                    <li
                                        key={index}
                                        className={`btn ${
                                            activeFilter === productmenu.category
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveFilter(
                                                    productmenu.category
                                                )
                                            }
                                            className="site-button-secondry button-sm radius-xl"
                                        >
                                            <span>
                                                {productmenu.type}
                                            </span>
                                        </button>
                                    </li>

                                ))}

                            </ul>

                        </div>


                        {/* PRODUCT LIST */}
                        <div
                            className="clearfix"
                            id="lightgallery"
                        >

                            <ul
                                id="masonry"
                                className="portfolio-ic dlab-gallery-listing gallery-grid-4 gallery row p-l0 sp10 lightgallery text-center"
                            >

                                {filteredplasticproduct.map((product, index) => (

                                 <li
    key={product.link}
    className={`${product.category} card-container col-lg-4 col-md-6 col-sm-6 p-a0 product-filter-item`}
>

                                        <div className="dlab-box dlab-gallery-box">

                                            {/* IMAGE */}
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect">

                                                <Link href={product.link}>
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                    />
                                                </Link>


                                                {/* OVERLAY */}
                                                <div className="overlay-bx">

                                                    <div className="overlay-icon">

                                                        <div className="text-white">

                                                            <Link href={product.link}>
                                                                <i className="fas fa-link icon-bx-xs"></i>
                                                            </Link>

                                                            <span
                                                                data-exthumbimage={product.image}
                                                                data-src={product.image}
                                                                className="check-km"
                                                                title={product.title}
                                                            ></span>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>


                                            {/* PRODUCT INFO */}
                                            <div className="dez-info p-a30 bg-white">

                                                <p className="dez-title m-t0">
                                                    <Link href={product.link}>
                                                        {product.title}
                                                    </Link>
                                                </p>

                                                <p>
                                                    <small>
                                                        {product.type}
                                                    </small>
                                                </p>

                                            </div>

                                        </div>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}