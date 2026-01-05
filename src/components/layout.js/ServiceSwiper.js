"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import ServiceItem from "../sections/ServiceItem";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "@/styles/swiperCustom.scss";

export default function ServiceSwiper() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ServiceItem
            title="Marine Fuel Supply"
            description="We provide high-quality marine fuel to vessels worldwide, ensuring compliance with international standards and environmental regulations."
            backgroundImage="/images/service-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceItem
            title="Bunker Services"
            description="We offer end-to-end logistics solutions, including scheduling, documentation, and on-site support to ensure smooth operations."
            backgroundImage="/images/service-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceItem
            title="Logistics and Support"
            description="We offer end-to-end logistics solutions, including scheduling, documentation, and on-site support to ensure smooth operations."
            backgroundImage="/images/service-3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceItem
            title="Logistics and Support"
            description="We offer end-to-end logistics solutions, including scheduling, documentation, and on-site support to ensure smooth operations."
            backgroundImage="/images/service-4.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
