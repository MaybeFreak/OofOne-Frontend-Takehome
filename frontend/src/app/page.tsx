import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>We want your</h3>
      <h2>Feedback</h2>
      <a href="/questionnaire">Click Here !</a>
    </main>
  );
}
