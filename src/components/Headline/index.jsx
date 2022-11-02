import React from "react";
import styles from "src/styles/Home.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>itemの数は {props.children}</p>

      <button onClick={props.handleReduce}>へらす</button>
    </div>
  );
};
