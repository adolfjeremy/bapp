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
              <h3>Proven Industry Experience</h3>
              <p>
                With over two decades of experience, BAPP has built a strong
                track record in supplying industrial and marine fuel solutions
                for diverse operational requirements.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-2"]}`}>
              <Image
                src="/images/icons/sprout.svg"
                alt="Sprout Icon"
                width={50}
                height={50}
              />
              <h3>Integrated Energy Services</h3>
              <p>
                We offer end-to-end fuel solutions covering HSD and MFO supply,
                bunker services, ship-to-ship operations, and floating storage
                support—delivered through a single, reliable partner.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-wide"]}`}>
              <Image
                src="/images/icons/goal.svg"
                alt="Goal Icon"
                width={50}
                height={50}
              />
              <h3>Structured Operations & Nationwide Coverage</h3>
              <p>
                BAPP operates through established infrastructure and nationwide
                distribution networks, enabling efficient fuel delivery across
                key industrial and maritime locations. Our operational framework
                is designed to support supply continuity, logistical
                coordination, and service consistency in demanding environments.
              </p>
            </div>
            <div className={`${styles.card} ${styles["card-cta"]}`}>
              <Image
                src="/images/icons/people.svg"
                alt="People Icon"
                width={50}
                height={50}
              />
              <h3>A Partner Focused on Long-Term Reliability</h3>
              <p>
                BAPP is trusted by industry leaders not only for operational
                capability, but for a disciplined and professional approach to
                long-term fuel supply. We emphasize consistency, compliance, and
                clarity in every engagement.
              </p>
              <p>
                For organizations that require a dependable partner to support
                critical operations, BAPP provides a practical pathway to stable
                and well-managed energy supply.
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
