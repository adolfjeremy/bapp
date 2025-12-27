import styles from "./ServiceItem.module.scss";
import SeoImage from "../ui/SeoImage";
import Link from "next/link";

function ServiceItem({ title, description, backgroundImage, url = "" }) {
  return (
    <Link
      href={url}
      className={styles.serviceItem}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SeoImage imageSrc={backgroundImage} seoAlt={title} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default ServiceItem;
