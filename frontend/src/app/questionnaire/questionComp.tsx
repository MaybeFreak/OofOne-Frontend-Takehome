import React, { useState } from "react";
import { IAnswer, IQuestion } from "./interfaces";

export default function QuestionComp({
  question,
  answers,
  currentQuestionId,
  setCurrentQuestionId,
  setAnswers,
  lastQuestion,
}: {
  question: IQuestion;
  answers: IAnswer[];
  currentQuestionId: number;
  setCurrentQuestionId: Function;
  setAnswers: Function;
  lastQuestion: boolean;
}): React.ReactNode {
  const [answer, setAnswer] = useState("");

  const handleChange = (value: string) => {
    let updatedAnswer = value;
    setAnswer(updatedAnswer);
  };

  const handleSubmit = (e: any) => {
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
      return null;
    }
    console.log("done");
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
        <button onClick={handleBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
