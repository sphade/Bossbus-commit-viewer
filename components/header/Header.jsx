import React from "react";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>commitViewer</h1>
      <ul className={styles.headerList}>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}
