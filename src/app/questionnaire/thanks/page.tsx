import Link from "next/link";
import "../questionnaire.css";

export default function ThanksPage() {
  return (
    <div className="thanks">
      <h2>Thank you for your feedback</h2>
      <p>You can see feedback on the feedback page</p>
      <Link href={"/feedback"}>Feedback Page</Link>
    </div>
  );
}
