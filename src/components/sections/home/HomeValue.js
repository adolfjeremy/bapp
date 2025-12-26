import styles from "./HomeValue.module.scss";

function HomeValue() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridHeading}`}>
          <h2>Our Value</h2>
        </div>
        <div className={styles.gridItem}>
          <h3>Reliability</h3>
          <p>
            We ensure a consistent and dependable fuel supply through structured
            operations, efficient logistics, and disciplined delivery standards
            to support our client's day-to-day operations.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3>Quality & Compliance</h3>
          <p>
            All products and services are delivered in accordance with
            applicable industry specifications and regulatory requirements,
            ensuring safety, performance, and operational reliability.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3>Customer Focus</h3>
          <p>
            We work closely with our clients to understand their needs and
            provide practical, efficient, and responsive fuel solutions that
            support long-term business relationships.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeValue;
