export class Option {
  name: string;
  isAnswer: boolean;
  selected: boolean;

  constructor(data: any) {
    data = data || {};

    this.name = data.name;
    this.isAnswer = data.isAnswer;
  }
}
