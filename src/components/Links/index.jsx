import React from "react";
import styles from "src/styles/Home.module.css";

export function Links({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
