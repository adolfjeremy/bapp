import Image from "next/image";
import Container from "../layout.js/Container";
import Button from "@/components/ui/Button";
import styles from "./PageHero.module.scss";
import Link from "next/link";

function PageHero({
  titleDesktop,
  titleMobile,
  descriptionDesktop,
  descriptionMobile,
  ctaLabel,
  ctaHref,
  bgDesktop,
  bgMobile,
  seoAlt,
}) {
  return (
    <section
      className={styles.hero}
      style={{
        "--bg-desktop": `url(${bgDesktop})`,
        "--bg-mobile": `url(${bgMobile})`,
      }}
    >
      <Image
        fill
        src={bgDesktop}
        alt={seoAlt}
        className={styles.seoImage}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.desktopOnly}>{titleDesktop}</span>
            <span className={styles.mobileOnly}>{titleMobile}</span>
          </h1>

          <p className={styles.description}>
            <span className={styles.desktopOnly}>{descriptionDesktop}</span>
            <span className={styles.mobileOnly}>{descriptionMobile}</span>
          </p>

          {ctaLabel && (
            <Button as={Link} href={ctaHref} size="sm">
              {ctaLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
