import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { updateCommits, updateRepo } from "../../feature/commits/commitsSlice";
import styles from "./suggestedRepo.module.css";
export default function SuggestedRepo({ name }) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      className={styles.suggestedRepo}
      onClick={() => {
        axios(
          `  https://api.github.com/repos/${name}/commits?per_page=10`
        ).then((data) => {
          dispatch(updateRepo(name));
          dispatch(updateCommits(data.data));
          router.push("/commits");
        });
      }}
    >
      <h1>{name}</h1>
    </div>
  );
}
