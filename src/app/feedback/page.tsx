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
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/Feedback/records?page=1&perPage=20"
    );
    const data = await res.json();
    setData(data.items);
  };

  return (
    <main>
      <h2>Feedback</h2>
      <div id="FeedbackContainer">
        {!data ? (
          <div>Loading</div>
        ) : (
          data.map((entry: any, i: number) => (
            <Card key={i}>
              <div className="qAndA">
                {entry.data.map((question: any, i: number) => (
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
