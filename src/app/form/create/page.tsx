"use client";
import { useState } from "react";
import { IQuestionContainer } from "../../questionnaire/interfaces";
import { Operation } from "@/app/utils/enums";
import Card from "@/app/components/Card/Card";
import "./create.css";

export default function CreateForm() {
  const [newForm, setNewForm] = useState<IQuestionContainer[]>([]);

  const addQuestion = () => {
    console.log("Add Question");
    const updatedForm = newForm;
    updatedForm.push({
      question: [
        {
          title: "",
          text: "",
          type: "text",
        },
      ],
    });
    setNewForm([...updatedForm]);
  };

  const handleAddPath = (index: number) => {
    const updatedForm = newForm;
    newForm[index].condition = {
      answer: 0,
      operation: Operation.lessThen,
      value: 0,
    };
    newForm[index].question.push({
      title: "",
      text: "",
      type: "text",
    });
    setNewForm([...updatedForm]);
  };

  const handleRemovePath = (index: number) => {
    const updatedForm = newForm;
    updatedForm[index].question.pop();
    delete updatedForm[index].condition;
    setNewForm([...updatedForm]);
  };

  const handleRemove = (questionIndex: number): undefined => {
    console.log("remove question", questionIndex);
    const updatedForm = newForm;
    console.log(updatedForm);
    updatedForm.splice(questionIndex, 1);
    setNewForm([...updatedForm]);
  };

  const handleChange = (e: any, index: number, path: number) => {
    const name = e.target.name;
    const updatedForm = newForm;
    updatedForm[index].question[path][name] = e.target.value;
    setNewForm([...updatedForm]);
  };

  return (
    <main className="create">
      {newForm.map((question, i) => (
        <div className="question" key={i}>
          {question.question.map((question, j) => (
            <Card key={j}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => handleChange(e, i, j)}
                value={question.title}
              />
              <input
                type="text"
                name="text"
                placeholder="Question"
                onChange={(e) => handleChange(e, i, j)}
                value={question.text}
              />
              <select>
                <option>text</option>
                <option>number</option>
                <option>date</option>
              </select>
            </Card>
          ))}
          {question.question.length < 2 ? (
            <button onClick={() => handleAddPath(i)}>Add Path</button>
          ) : (
            <button onClick={() => handleRemovePath(i)}>Remove Path</button>
          )}
          <button onClick={() => handleRemove(i)}>x</button>
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
    </main>
  );
}
