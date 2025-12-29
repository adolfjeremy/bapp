"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function SlickCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src="/images/clients/logo1.svg"
            alt="Client 1 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
        <div>
          <Image
            src="/images/clients/logo2.svg"
            alt="Client 2 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
        <div>
          <Image
            src="/images/clients/logo3.svg"
            alt="Client 3 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
        <div>
          <Image
            src="/images/clients/logo4.svg"
            alt="Client 4 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
        <div>
          <Image
            src="/images/clients/logo5.svg"
            alt="Client 5 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
        <div>
          <Image
            src="/images/clients/logo2.svg"
            alt="Client 5 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
        <div>
          <Image
            src="/images/clients/logo3.svg"
            alt="Client 5 Logo"
            width={170}
            height={41}
            unoptimized
          />
        </div>
      </Slider>
    </div>
  );
}
