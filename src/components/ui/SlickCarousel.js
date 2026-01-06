"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Container from "../layout.js/Container";

import styles from "./SlickCarousel.module.scss";

export default function SlickCarousel() {
  return (
    <section>
      <Container>
        <Marquee autoFill gradient={true} gradientWidth={25}>
          <div className={styles.marqueeGap}>
            <Image
              src="/images/clients/logo-pin.png"
              alt="Client 1 Logo"
              width={170}
              height={55}
            />
          </div>
          <div className={styles.marqueeGap}>
            <Image
              src="/images/clients/logo2.svg"
              alt="Client 2 Logo"
              width={170}
              height={41}
              unoptimized
            />
          </div>
          <div className={styles.marqueeGap}>
            <Image
              src="/images/clients/logo3.svg"
              alt="Client 3 Logo"
              width={170}
              height={41}
              unoptimized
            />
          </div>
          <div className={styles.marqueeGap}>
            <Image
              src="/images/clients/logo4.svg"
              alt="Client 4 Logo"
              width={170}
              height={41}
              unoptimized
            />
          </div>
          <div className={styles.marqueeGap}>
            <Image
              src="/images/clients/logo5.svg"
              alt="Client 5 Logo"
              width={170}
              height={41}
              unoptimized
            />
          </div>
        </Marquee>
      </Container>
    </section>
  );
}
