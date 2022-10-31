import Link from "next/link";
import React from "react";
import styles from "src/styles/Home.module.css";

export function Header() {
  return (
    <header>
      <Link href="/">
        <p>Index</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </header>
  );
}
