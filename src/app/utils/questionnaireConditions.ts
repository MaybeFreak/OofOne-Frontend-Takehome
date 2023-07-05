import { IAnswer } from "../questionnaire/interfaces";

export default function isConditionMet(condition: any, answers: any): boolean {
  if (!condition) return false;

  const input: any[] = [];
  condition.answer.forEach((index: any) => {
    input.push(answers[index].value);
  });

  const value = condition.value;
  let sum: number = 0;
  let avg: number = 0;

  input.forEach((num: string) => {
    sum += Number(num);
  });
  avg = sum / input.length;

  switch (condition.operation) {
    case "lessThen":
      return sum < value;
    case "moreThen":
      return sum > value;
    case "equalTo":
      return sum === value;
    case "avgLessThen":
      return avg < value;
    case "avgMoreThen":
      return avg > value;
    case "avgEqualTo":
      return avg === value;
    default:
      return false;
  }
}
