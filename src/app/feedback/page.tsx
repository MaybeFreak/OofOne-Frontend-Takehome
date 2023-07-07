"use client";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import "./feedback.css";

export default function Feedback() {
  const [data, setData]: any = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/answers");
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  // TODO: Look into improving nameing: entry.data.data.map is not very readable

  return (
    <main>
      <h2>Feedback</h2>
      <div id="FeedbackContainer">
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.map((entry: any, i: number) => (
            <Card key={i}>
              <div className="qAndA">
                {entry.data.data.map((question: any, i: number) => (
                  <div key={i} className="pairs">
                    <h3>{question.question}</h3>
                    <p>{question.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}
