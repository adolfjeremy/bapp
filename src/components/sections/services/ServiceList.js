import Container from "@/components/layout.js/Container";
import styles from "./ServiceList.module.scss";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  let services = [1, 2, 3, 4];
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <h2>Our Services</h2>
          <div className={styles.serviceList}>
            {services.map((i) => (
              <ServiceItem key={i} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
