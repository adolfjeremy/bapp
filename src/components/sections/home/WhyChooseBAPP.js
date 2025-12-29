import Image from "next/image";
import styles from "./WhyChooseBAPP.module.scss";
import Container from "@/components/layout.js/Container";
import SeoImage from "@/components/ui/SeoImage";
import Button from "@/components/ui/Button";

export default function WhyChooseBAPP() {
  return (
    <section className={styles.whyChooseBAPPSection}>
      <SeoImage
        imageSrc="/images/why-choose-bapp.png"
        seoAlt="Cargo vessel at port terminal representing marine fuel supply and bunker service operations."
      />
      <Container>
        <div className={styles.content}>
          <h2>
            Why <span>BAPP</span> Trusted by Industry Leaders
          </h2>
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles["card-1"]}`}>
              <Image
                src="/images/icons/network.svg"
                alt="Network Icon"
                width={50}
                height={50}
              />
              <h3>Established Industry Experience</h3>
              <p>
                Established in 2004, BAPP has accumulated extensive experience
                in supplying fuel solutions for industrial, mining, and marine
                operations, supported by a solid understanding of operational
                and regulatory requirements.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-2"]}`}>
              <Image
                src="/images/icons/sprout.svg"
                alt="Sprout Icon"
                width={50}
                height={50}
              />
              <h3>Integrated Fuel Services</h3>
              <p>
                BAPP provides end-to-end fuel solutions covering High Speed
                Diesel and Marine Fuel Oil supply, bunker services, ship-to-ship
                operations, and floating storage support through a single,
                coordinated service framework.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-wide"]}`}>
              <Image
                src="/images/icons/goal.svg"
                alt="Goal Icon"
                width={50}
                height={50}
              />
              <h3>Operational Capability & Distribution Network</h3>
              <p>
                Our operations are supported by established infrastructure and
                nationwide distribution coverage across key industrial and
                maritime locations. This enables efficient coordination, supply
                continuity, and consistent service delivery in complex operating
                environments.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-cta"]}`}>
              <Image
                src="/images/icons/people.svg"
                alt="People Icon"
                width={50}
                height={50}
              />
              <h3>A Dependable Partner for Long-Term Operations</h3>
              <p>
                BAPP is trusted by industry leaders for its disciplined approach
                to fuel supply, emphasizing consistency, compliance, and
                operational clarity. We focus on building stable partnerships
                that support critical business activities over the long term.
              </p>
              <p>
                For organizations seeking a reliable fuel partner with a
                structured and professional operating model, BAPP offers a
                practical and dependable approach to meeting ongoing energy
                supply requirements.
              </p>
              <Button href="/contact" variant="secondary" size="sm">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
