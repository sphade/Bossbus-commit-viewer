import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import CommitItem from "../components/commitItem/CommitItem";
import Input from "../components/input/Input";
import styles from "../styles/commits.module.css";
export default function Commits() {
  const commits = useSelector((state) => state.commits.commits);
  const repo = useSelector((state) => state.commits.repo);
  const loading = useSelector((state) => state.commits.loading);

  return (
    <div>
      <Head>
        <title>Commit Viewer</title>
      </Head>

      <header className={styles.commitsHeader}>
        <Link href="/" passHref>
          <h1>CommitViewer</h1>
        </Link>
        <div className={styles.commiyInput}>
          <Input />
        </div>
      </header>
      <main>
        {!loading ? (
          <>
            <h1 className={styles.repoTitle}>{repo}</h1>

            <div className={styles.commitItemContainer}>
              {commits.map(({ commit, node_id, committer }) => (
                <CommitItem
                  key={node_id}
                  message={commit?.message}
                  author={commit?.author.name}
                  time={commit?.author.date}
                  pic={committer?.avatar_url}
                />
              ))}
            </div>
          </>
        ) : (
          <h1 className={styles.loading}>loading....</h1>
        )}
      </main>
    </div>
  );
}
