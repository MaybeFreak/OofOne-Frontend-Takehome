import { Operation } from "../utils/enums";

interface ICondition {
  answer: any;
  operation: Operation;
  value: any;
}

interface IQuestion {
  title: string;
  text: string;
  type: string;
  params?: object;
}

export interface IQuestionContainer {
  condition?: ICondition;
  question: IQuestion | IQuestion[];
}

export interface IAnswer {
  question: string;
  value: string;
}
