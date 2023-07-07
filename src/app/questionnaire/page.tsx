"use client";
import isConditionMet from "../utils/questionnaireConditions";
import { IQuestionContainer, IAnswer } from "./interfaces";
import { useEffect, useState } from "react";
import QuestionComp from "./questionComp";
import Card from "../components/Card/Card";
import "./questionnaire.css";

export default function Questionnaire() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [formData, setFormData] = useState<IQuestionContainer[]>([]);
  const [formId, setFormId] = useState<number>(0);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const fetchdata = async () => {
    const formData = await fetch("http://localhost:4000/forms/1")
      .then((res) => res.json())
      .then((data) => {
        setFormId(data.id);
        return data.data;
      });
    setFormData(formData);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (formData.length === 0) return <div>Loading...</div>;

  return (
    <main className="questionnaire">
      <Card>
        <QuestionComp
          question={
            formData[currentQuestionId].question[
              isConditionMet(formData[currentQuestionId].condition, answers)
                ? 1
                : 0
            ]
          }
          answers={answers}
          currentQuestionId={currentQuestionId}
          setCurrentQuestionId={setCurrentQuestionId}
          setAnswers={setAnswers}
          lastQuestion={currentQuestionId === formData.length - 1}
          formId={formId}
        />
      </Card>
    </main>
  );
}
