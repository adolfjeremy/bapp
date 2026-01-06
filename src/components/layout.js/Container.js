import styles from "./Container.module.scss";

function Container({
  children,
  as = "div",
  flush = "none", // none | left | right
}) {
  const Tag = as;

  return (
    <Tag
      className={[
        styles.container,
        flush === "left" && styles["container--flush-left"],
        flush === "right" && styles["container--flush-right"],
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
export default Container;
