"use client";

import Slider from "react-slick";
import ServiceItem from "./ServiceItem";

export default function ServiceCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "32px",
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="slider-container">
        <Slider {...settings}>
          <ServiceItem
            title="Marine Fuel Supply"
            description="High-quality marine fuel compliant with international standards."
            backgroundImage="/images/service-1.png"
          />
          <ServiceItem
            title="Bunker Services"
            description="End-to-end bunker logistics and documentation support."
            backgroundImage="/images/service-2.png"
          />
          <ServiceItem
            title="Logistics & Support"
            description="Reliable logistics solutions for marine operations."
            backgroundImage="/images/service-3.png"
          />
          <ServiceItem
            title="Operational Assistance"
            description="On-site operational support ensuring smooth delivery."
            backgroundImage="/images/service-4.png"
          />
        </Slider>
      </div>
    </div>
  );
}
