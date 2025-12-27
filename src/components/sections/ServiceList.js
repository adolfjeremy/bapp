import Image from "next/image";
import Container from "../layout.js/Container";
import ServiceItem from "./ServiceItem";
import styles from "./ServiceList.module.scss";
import SeoImage from "../ui/SeoImage";
import ServiceCarousel from "./ServiceCarousel";

function ServiceList() {
  return (
    <section className={styles.serviceList}>
      <SeoImage
        imageSrc="/images/service-bg.png"
        seoAlt="Cargo vessel at port terminal representing marine fuel supply and bunker service operations."
      />
      <Container>
        <div className={styles.serviceContent}>
          <h2>Our Services</h2>
          <div className={styles.services}>
            <ServiceItem
              title="Marine Fuel Supply"
              description="We provide high-quality marine fuel to vessels worldwide, ensuring compliance with international standards and environmental regulations."
              backgroundImage="/images/service-1.png"
            />
            <ServiceItem
              title="Bunker Services"
              description="We offer end-to-end logistics solutions, including scheduling, documentation, and on-site support to ensure smooth operations."
              backgroundImage="/images/service-2.png"
            />
            <ServiceItem
              title="Logistics and Support"
              description="We offer end-to-end logistics solutions, including scheduling, documentation, and on-site support to ensure smooth operations."
              backgroundImage="/images/service-3.png"
            />
            <ServiceItem
              title="Logistics and Support"
              description="We offer end-to-end logistics solutions, including scheduling, documentation, and on-site support to ensure smooth operations."
              backgroundImage="/images/service-4.png"
            />
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <ServiceCarousel />
        </div>
      </Container>
    </section>
  );
}

export default ServiceList;
