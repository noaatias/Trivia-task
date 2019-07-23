import { Option } from "./option";

export class Question {
  id: number;
  name: string;
  answers: Option[];

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.name;
    this.answers = data.answers;
  }
}
