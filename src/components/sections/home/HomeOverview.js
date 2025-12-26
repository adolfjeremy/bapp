import Image from "next/image";
import Container from "@/components/layout.js/Container";
import Button from "@/components/ui/Button";
import styles from "./HomeOverview.module.scss";
import Link from "next/link";

export default function HomeOverview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.title}>Leading Fuel Supplier Since 2004</h2>

            <p className={styles.description}>
              PT. Bumi Asri Prima Pratama (BAPP) is an{" "}
              <span>Indonesian energy trading company</span> established in
              2004, specializing in the supply and distribution of High Speed
              Diesel (HSD) and Marine Fuel Oil (MFO). As a business unit of PT.
              Pelaksana Jaya Mulia, BAPP serves industrial, mining,
              transportation, and marine sectors with reliable fuel solutions
              for both domestic and international operations.
            </p>
            <p className={styles.description}>
              With integrated services including fuel trading, bunker services,
              ship-to-ship (STS) operations, and floating storage unit (FSU)
              solutions, BAPP is supported by strong infrastructure and
              nationwide distribution networks. We are committed to delivering
              consistent product quality, operational efficiency, and service
              excellence to support our clients' critical energy needs across
              Indonesia.
            </p>

            <Button as={Link} href="/about" size="sm">
              About Us
            </Button>
          </div>
          <div className={styles.media}>
            <Image
              src="/images/tanker.png"
              alt="Fuel barge operated by PT Bumi Asri Prima Pratama"
              width={400}
              height={700}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
