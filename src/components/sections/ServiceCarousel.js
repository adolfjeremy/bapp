"use client";

import Slider from "react-slick";
import ServiceItem from "./ServiceItem";

export default function ServiceCarousel() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 500,
    swipeToSlide: true,

    slidesToShow: 1,
    centerMode: true, // ⬅️ WAJIB DI ROOT
    centerPadding: "64px", // ⬅️ DEFAULT (tablet-ish)

    responsive: [
      {
        breakpoint: 300,
        settings: {
          centerPadding: "30px", // mobile kecil
        },
      },
      {
        breakpoint: 420,
        settings: {
          centerPadding: "35px", // mobile kecil
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "64px", // mobile besar / tablet
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: false, // desktop non-center
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
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
  );
}
