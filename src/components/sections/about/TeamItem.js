import Image from "next/image";
import styles from "./TeamList.module.scss";

export default function TeamItem({ name, title }) {
  return (
    <div className={styles.teamItem}>
      <Image
        src="/images/team-image.png"
        alt="team member name"
        fill={true}
        objectFit="cover"
      />
      <div className={styles.teamInfo}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}
