import React from "react";

function Container({ children, as = "div" }) {
  const Tag = as;
  return <Tag className="container">{children}</Tag>;
}

export default Container;
