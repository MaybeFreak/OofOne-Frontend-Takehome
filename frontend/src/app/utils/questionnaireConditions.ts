export default function isConditionMet(condition: any, answer: any): boolean {
  const value = condition.value;
  let sum = 0;
  let avg = 0;

  if (answer.length > 1) {
    answer.forEach((num: number) => (sum += num));
    avg = sum / answer.length;
  }

  switch (condition.operation) {
    case "lessThen":
      return answer < value;
    case "moreThen":
      return answer > value;
    case "equalTo":
      return answer === value;
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
