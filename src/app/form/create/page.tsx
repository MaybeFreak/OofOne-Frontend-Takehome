"use client";
import { useState } from "react";
import { IQuestionContainer } from "../../questionnaire/interfaces";
import { Operation } from "@/app/utils/enums";
import Card from "@/app/components/Card/Card";
import "./create.css";

export default function CreateForm() {
  const [newForm, setNewForm] = useState<IQuestionContainer[]>([
    {
      question: [
        {
          title: "",
          text: "",
          type: "text",
        },
      ],
    },
  ]);

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

  const handleRemove = (questionIndex: number) => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(newForm);
  };

  return (
    <main>
      <form className="create" onSubmit={(e) => handleSubmit(e)}>
        {newForm.map((question, i) => (
          <div className="question" key={i}>
            {question.question.map((question, j) => (
              <Card key={j}>
                {j !== 0 && (
                  <>
                    <p>Set conditions when this path shows up</p>
                    <p>Based on</p>
                    <select required>
                      <option value="">Please select one</option>
                      {newForm.map((e, k) => {
                        console.log(k, i);
                        if (k < i)
                          return <option value={k}>Question {k + 1}</option>;
                      })}
                    </select>
                    <p>When</p>
                    <select required>
                      <option value="">Select comparison</option>
                      {Object.values(Operation).map((operation, i) => (
                        <option value={operation} key={i}>
                          {operation}
                        </option>
                      ))}
                    </select>
                    <p>Value</p>
                    <input
                      type={
                        newForm[newForm[i].condition?.answer].question[0].type
                      }
                      required
                    />
                  </>
                )}
                <h2>Question</h2>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={(e) => handleChange(e, i, j)}
                  value={question.title}
                  required
                />
                <input
                  type="text"
                  name="text"
                  placeholder="Question"
                  onChange={(e) => handleChange(e, i, j)}
                  value={question.text}
                  required
                />
                <select name="type" onChange={(e) => handleChange(e, i, j)}>
                  <option value={"text"}>text</option>
                  <option value={"number"}>number</option>
                  <option value={"date"}>date</option>
                </select>
              </Card>
            ))}
            {i !== 0 && (
              <>
                {question.question.length < 2 ? (
                  <button onClick={() => handleAddPath(i)}>Add Path</button>
                ) : (
                  <button onClick={() => handleRemovePath(i)}>
                    Remove Path
                  </button>
                )}
              </>
            )}
            {i !== 0 && <button onClick={() => handleRemove(i)}>x</button>}
          </div>
        ))}
        <button onClick={addQuestion}>Add Question</button>
        <button type="submit">Finish</button>
      </form>
    </main>
  );
}
