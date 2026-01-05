"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { GiThreeLeaves } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TbArrowRightToArc } from "react-icons/tb";
import { TbArrowLeftToArc } from "react-icons/tb";
import styles from "./HomeValue.module.scss";
import Container from "@/components/layout.js/Container";

const data = [
  {
    icon: <GiThreeLeaves />,
    title: "Nurturing Partnerships",
    desc: "Expanding winning collaborations with customers and partners to boost business, economic and national growth",
  },
  {
    icon: <MdEnergySavingsLeaf />,
    title: "Strategic Alliances",
    desc: "Building long-term strategic alliances to deliver sustainable value for stakeholders",
  },
  {
    icon: <MdOutlineHandshake />,
    title: "Market Leadership",
    desc: "Driving leadership through innovation, governance, and operational excellence",
  },
  {
    icon: <IoIosPeople />,
    title: "Trusted Excellence",
    desc: "Delivering trusted solutions with uncompromising quality and integrity",
  },
];

export default function HomeValue() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: 0,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    speed: 600,
    beforeChange: (_, next) => setActive(next),
  };

  return (
    <section className={styles.section}>
      <h2>Our Value</h2>
      <Container>
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, i) => (
            <div
              key={i}
              className={`${styles.iconSlide} ${
                i === active ? styles.active : ""
              }`}
            >
              {item.icon}
            </div>
          ))}
        </Slider>

        {/* TEXT */}
        <div className={styles.textWrap}>
          <h3>{data[active].title}</h3>
          <p>{data[active].desc}</p>
        </div>

        {/* DOTS + ARROWS */}
        <div className={styles.controls}>
          <button
            className={styles.arrow}
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
          >
            <TbArrowLeftToArc />
          </button>

          <div className={styles.dots}>
            {data.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  i === active ? styles.activeDot : ""
                }`}
                onClick={() => sliderRef.current?.slickGoTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.arrow}
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
          >
            <TbArrowRightToArc />
          </button>
        </div>
      </Container>
    </section>
  );
}
