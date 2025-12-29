import Image from "next/image";
import Container from "../layout.js/Container";
import SlickCarousel from "../ui/SlickCarousel";
import styles from "./ClientList.module.scss";

export default function ClientList() {
  return (
    <section className={styles.clientSection}>
      <Container>
        <div className={styles.content}>
          <h2>Trusted by Industry Leaders</h2>
          <div className={styles.clientList}>
            <SlickCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
}
