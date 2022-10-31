import React, { useEffect } from "react";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styles from "src/styles/Home.module.css";

export function Main(props) {
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
