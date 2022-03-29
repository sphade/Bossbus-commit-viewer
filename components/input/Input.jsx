import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCommits,
  updateLoading,
  updateRepo,
} from "../../feature/commits/commitsSlice";
import styles from "./input.module.css";
export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const repo = useSelector((state) => state.commits.repo);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateLoading(true));
    dispatch(updateRepo(inputValue));

    const data = await axios(
      `  https://api.github.com/repos/${inputValue}/commits?per_page=10`
    );
    dispatch(updateCommits(data.data));
    dispatch(updateLoading(false));
    router.push("/commits");
  };
  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <span>🔍</span>
        <input
          placeholder="Eg. facebook/react"
          type="text"
          value={repo}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button className={styles.btn} type="submit">
        See Commits
      </button>
    </form>
  );
}
