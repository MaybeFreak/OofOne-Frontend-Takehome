import React, { useState } from "react";
import { IAnswer, IQuestion } from "./interfaces";
import { useRouter } from "next/navigation";

export default function QuestionComp({
  question,
  answers,
  currentQuestionId,
  setCurrentQuestionId,
  setAnswers,
  lastQuestion,
  formId,
}: {
  question: IQuestion;
  answers: IAnswer[];
  currentQuestionId: number;
  setCurrentQuestionId: Function;
  setAnswers: Function;
  lastQuestion: boolean;
  formId: number;
}): React.ReactNode {
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  const handleChange = (value: string) => {
    let updatedAnswer = value;
    setAnswer(updatedAnswer);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let newAnswers = answers;
    newAnswers[currentQuestionId] = {
      question: question.text,
      value: answer,
    };
    setAnswers(newAnswers);
    if (!lastQuestion) {
      setAnswer("");
      setCurrentQuestionId(++currentQuestionId);
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { for: formId, data: answers } }),
      };
      await fetch("http://localhost:3000/api/feedback", options);
      router.push("/questionnaire/thanks");
    }
  };

  const handleBack = () => {
    setCurrentQuestionId(--currentQuestionId);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>{question.title}</h2>
      <label htmlFor="question">{question.text}</label>
      <input
        onChange={(e) => handleChange(e.target.value)}
        name="question"
        value={answer}
        type={question.type}
        min={question.params?.min ? question.params.min : undefined}
        max={question.params?.max ? question.params.max : undefined}
        required
      />
      <div className="fromButtons">
        <button
          onClick={handleBack}
          className={currentQuestionId == 0 ? "hidden" : undefined}
        >
          Back
        </button>
        <button type="submit">{lastQuestion ? "Finish" : "Next"}</button>
      </div>
    </form>
  );
}
