import React from "react";

export const Layout = (props) => {
  return <div className={Classes.container}>{props.children}</div>;
};
