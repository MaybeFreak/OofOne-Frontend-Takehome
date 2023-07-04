import { Operation } from "../utils/enums";

export interface ICondition {
  answer: any;
  operation: Operation;
  value: any;
}

export interface IInputParams {
  min?: number;
  max?: number;
}

export interface IQuestion {
  title: string;
  text: string;
  type: string;
  params?: IInputParams;
}

export interface IQuestionContainer {
  condition?: ICondition;
  question: IQuestion[];
}

export interface IAnswer {
  question: string;
  value: string;
}
