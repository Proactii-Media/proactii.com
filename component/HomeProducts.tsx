"use client";

import { useEffect, useState } from "react";


export default function HomeProducts() {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 576) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const maxIndex = Math.max(products.length - itemsPerView, 0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="section-full bg-gray content-inner-2 about-carousel-ser">
      <div className="container">
        {/* Section Heading */}
        <div className="section-head text-center">
          <h2 className="title">Our Products</h2>

          <p>
            Explore our range of Automatic Assembly Machines and advanced
            industrial automation solutions, engineered to deliver high
            precision, superior performance, and reliable manufacturing
            results.
          </p>
        </div>

        {/* Carousel */}
        <div className="home-products-carousel">
          <div
            className="home-products-track"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsPerView
              }%)`,
            }}
          >
            {products.map((product) => (
              <div
                className="home-product-slide"
                key={product.slug}
                style={{
                  flex: `0 0 ${100 / itemsPerView}%`,
                }}
              >
                <div className="dlab-box service-media-bx">
                  {/* Product Image */}
                  <div className="dlab-media dlab-img-effect zoom">
                    <a href={`/engineering-products/${product.slug}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                      />
                    </a>
                  </div>

                  {/* Product Information */}
                  <div className="dlab-info text-center">
                    <span className="badge badge-primary m-b10">
                      {product.type}
                    </span>

                    <h2 className="dlab-title">
                      <a href={`/engineering-products/${product.slug}`}>
                        {product.title}
                      </a>
                    </h2>

                    <p>
                      {product.description.length > 120
                        ? product.description.substring(0, 120) + "..."
                        : product.description}
                    </p>

                    <a
                      href={`/engineering-products/${product.slug}`}
                      className="site-button btnhover15"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Buttons */}
        <div className="home-products-controls">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous products"
          >
            <i className="fa fa-angle-left"></i>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next products"
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}