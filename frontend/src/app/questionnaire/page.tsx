"use client";
import isConditionMet from "../utils/questionnaireConditions";
import { Operation } from "../utils/enums";
import { IQuestionContainer, IAnswer } from "./interfaces";
import { useEffect, useState } from "react";
import QuestionComp from "./questionComp";
import Card from "../components/Card/Card";

export default function Questionnaire() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const questions: IQuestionContainer[] = [
    {
      question: [
        {
          title: "Basic Questions",
          text: "When did you start using our service ?",
          type: "date",
        },
      ],
    },
    {
      question: [
        {
          title: "Basic Questions",
          text: "On a scale from 1 lowest to 10 highest, how would you rate the service we provide ?",
          type: "number",
          params: {
            min: 1,
            max: 10,
          },
        },
      ],
    },
    {
      question: [
        {
          title: "Basic Questions",
          text: "On a scale from 1 lowest to 10 highest, how would you rate the user experience ?",
          type: "number",
          params: {
            min: 1,
            max: 10,
          },
        },
      ],
    },
    {
      condition: {
        answer: [1, 2],
        operation: Operation.avgMoreThen,
        value: 5,
      },
      question: [
        {
          title: "Help us improve",
          text: "Are there any services you would like us to provide or improve on ?",
          type: "textarea",
        },
        {
          title: "Help us refine",
          text: "What are some of the core services you use ?",
          type: "textarea",
        },
      ],
    },
    {
      condition: {
        answer: [1, 2],
        operation: Operation.avgMoreThen,
        value: 5,
      },
      question: [
        {
          title: "Help us improve",
          text: "How could we improve your user experience ?",
          type: "textarea",
        },
        {
          title: "Help us refine",
          text: "What do you think creates a good user experience ?",
          type: "textarea",
        },
      ],
    },
  ];

  console.log(isConditionMet(questions[currentQuestionId].condition, answers));

  return (
    <main>
      <Card>
        <QuestionComp
          question={
            questions[currentQuestionId].question[
              isConditionMet(questions[currentQuestionId].condition, answers)
                ? 1
                : 0
            ]
          }
          answers={answers}
          currentQuestionId={currentQuestionId}
          setCurrentQuestionId={setCurrentQuestionId}
          setAnswers={setAnswers}
          lastQuestion={currentQuestionId === questions.length - 1}
        />
      </Card>
    </main>
  );
}
