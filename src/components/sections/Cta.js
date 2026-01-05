import Container from "../layout.js/Container";
import Button from "../ui/Button";
import SeoImage from "../ui/SeoImage";
import styles from "./Cta.module.scss";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <SeoImage
        imageSrc="/images/cta-bg.png"
        seoAlt="Cargo vessel at port terminal representing marine fuel supply and bunker service operations."
      />
      <Container>
        <div className={styles.content}>
          <h2>Looking for a Reliable Fuel Supply Partner?</h2>
          <p>
            Let us support your industrial and marine operations with consistent
            and professional fuel solutions.
          </p>
          <Button href="/contact" size="md" variant="secondary" as="a">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
