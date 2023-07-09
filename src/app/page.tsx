import Link from "next/link";
import "./Landing.css";

export default function Home() {
  return (
    <main className="landingPage">
      <div className="hero">
        <h3>We want your</h3>
        <h2>Feedback</h2>
        <Link href="/questionnaire/1">Click Here !</Link>
      </div>
    </main>
  );
}
