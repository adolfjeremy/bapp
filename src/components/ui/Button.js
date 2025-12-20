import "./button.scss";
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  ...props
}) {
  const Tag = as;
  return (
    <Tag className={`btn btn-${variant} btn-${size}`} {...props}>
      {children}
    </Tag>
  );
}

export default Button;
