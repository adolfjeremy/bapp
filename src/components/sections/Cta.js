import Container from "../layout.js/Container";
import Button from "../ui/Button";
import styles from "./Cta.module.scss";
Button;

export default function Cta() {
  return (
    <section className={styles.cta}>
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
