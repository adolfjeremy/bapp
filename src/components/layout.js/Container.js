import styles from "./Container.module.scss";

function Container({ children, as = "div", variant = "center" }) {
  const Tag = as;
  return (
    <Tag className={`${styles.container} ${styles[`container-${variant}`]}`}>
      {children}
    </Tag>
  );
}

export default Container;
