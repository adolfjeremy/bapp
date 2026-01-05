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
            <h2 className={styles.title}>
              Continuing a legacy together <br /> for our future.
            </h2>
            <p className={styles.description}>
              Established in 2004,{" "}
              <span>
                we have built a strong track record by aligning collaboration,
                execution, and a shared strategic purpose.{" "}
              </span>
              Through multiple market cycles, we have developed a resilient
              platform—powered by the energy of the next generation and the
              experience of seasoned leadership—to scale as a leading energy
              supplier in Indonesia.
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
