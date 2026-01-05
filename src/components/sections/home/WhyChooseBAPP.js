import Image from "next/image";
import styles from "./WhyChooseBAPP.module.scss";
import Container from "@/components/layout.js/Container";
import SeoImage from "@/components/ui/SeoImage";
import Button from "@/components/ui/Button";

export default function WhyChooseBAPP() {
  return (
    <section className={styles.whyChooseBAPPSection}>
      <SeoImage
        imageSrc="/images/why-choose-us-bg.png"
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
              <h3>Distribution Project</h3>
              <p>
                With our oil tankers and fuel transport trucks, we are equipped
                to provide reliable energy distribution across all areas.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-2"]}`}>
              <Image
                src="/images/icons/oil-tank.svg"
                alt="Sprout Icon"
                width={50}
                height={50}
              />
              <h3>Oil Storage Solutions</h3>
              <p>
                With a 150,000-kiloliter oil storage facility in Aceh, we
                guarantee energy supply reliability while supporting the storage
                of local and imported fuels.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-wide"]}`}>
              <Image
                src="/images/icons/tube.svg"
                alt="Goal Icon"
                width={50}
                height={50}
              />
              <h3>Research & Development Program</h3>
              <p>
                Equipped with cutting-edge laboratories and manufacturing units,
                we are committed to rigorous fuel testing and the long-term
                innovation of alternative energy sources
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-cta"]}`}>
              <Image
                src="/images/icons/ship.svg"
                alt="People Icon"
                width={50}
                height={50}
              />
              <h3>Oil bunker services</h3>
              <p>
                We are dedicated to ensuring energy access for fishermen and
                fostering local economic development through comprehensive
                bunker and retail operations
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
