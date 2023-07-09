"use client";
import { useEffect, useState } from "react";
import "./questionnaire.css";
import Link from "next/link";

export default function Questionnaire() {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const data = await fetch("http://localhost:4000/forms").then((res) =>
      res.json()
    );
    console.log(data);
    setForms(data);
  };

  useEffect(() => {
    fetchForms();
  }, []);

  if (forms.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {forms.map((form: any, i) => (
        <Link key={i} href={`http://localhost:3000/questionnaire/${form.id}`}>
          Form {form.id}
        </Link>
      ))}
    </div>
  );
}
