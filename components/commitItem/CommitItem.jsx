import React from "react";
import styles from "./commitItem.module.css";
export default function CommitItem({ message, author, pic, time }) {
  return (
    <div className={styles.CommitItem}>
      <div className={styles.left}>
        <div className={styles.avatar}>
          <img src={pic} className={styles.avatarPic}></img>
          <p>{author}</p>
        </div>
        <p className={styles.commitMes}>{message.split(" ", 5).join(" ")}</p>
      </div>

      <p className={styles.commitTime}>
        {new Date(time).toISOString().substring(0, 10)}
      </p>
    </div>
  );
}
