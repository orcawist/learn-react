import React from "react";
import Classes from "src/components/Layout/Layout.module.css";

export const Layout = (props) => {
  return <div className={Classes.container}>{props.children}</div>;
};
