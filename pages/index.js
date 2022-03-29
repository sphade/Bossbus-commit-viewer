import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Input from "../components/input/Input";
import SuggestedRepo from "../components/suggestedRepo/SuggestedRepo";
import styles from "../styles/Home.module.css";

export default function Controlled() {
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    axios(
      "https://api.github.com/search/repositories?q=stars%3A>30000&per_page=4&sort=stars"
    ).then((res) => {
      setSuggest(res.data.items);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Commit Viewer</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.homeHero}>
          <h1 className={styles.homeHero_heading}>
            Discover the world of code
          </h1>
          <p className={styles.homeHero_Paragraph}>
            Explore open source projects from GitHub, and read their commit
            history to see the story of how they were built.
          </p>
        </div>
        <Input />
        <p className={styles.pickRepos}>Or pick one of this suggested repos</p>

        <div className={styles.suggestedReposContainer}>
          {suggest?.map(({ id, full_name }) => (
            <SuggestedRepo key={id} name={full_name} />
          ))}
        </div>
      </main>
    </div>
  );
}
