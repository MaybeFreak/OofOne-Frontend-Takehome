import Link from "next/link";
import styles from "./page.module.css";
import "./Landing.css";

export default function Home() {
  return (
    <main className="landingPage">
      <div className="hero">
        <h3>We want your</h3>
        <h2>Feedback</h2>
        <Link href="/questionnaire">Click Here !</Link>
      </div>
    </main>
  );
}
