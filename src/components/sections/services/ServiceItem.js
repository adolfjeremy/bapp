import Button from "@/components/ui/Button";
import styles from "./ServiceList.module.scss";
import Image from "next/image";

export default function ServiceItem({ index }) {
  return (
    <div
      className={`${styles.serviceItem} ${
        index % 2 === 1 ? "" : `${styles.isEven}`
      }`}
    >
      <div className={styles.serviceImage}>
        <Image
          src="/images/service-img-prop.png"
          fill={true}
          alt="bapp service image"
        />
      </div>
      <div className={styles.serviceDesc}>
        <h3>LOW SULFUR FUEL OIL</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse
        </p>
        <Button variant="primary" size="sm">
          Learn More
        </Button>
      </div>
    </div>
  );
}
