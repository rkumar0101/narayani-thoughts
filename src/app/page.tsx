// src/app/page.tsx

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Narayani Thoughts
      </h1>
      <p className={styles.subtitle}>
        A Voice Born of Vision, Grounded in Truth.
      </p>
      <button className={styles.button}>
        Read the Vision
      </button>
    </main>
  );
}