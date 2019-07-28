import {Component, OnInit} from "@angular/core";
import {Option} from "../models/option";
import {Router, ActivatedRoute} from "@angular/router";
import {QuestionsService} from "./questions.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  data: any;
  questions: any[] = [];
  options: Option[] = [];
  whichQuestion: number = 0;
  selected: boolean = false;
  totalScore: number = 0;
  exPa: any; //one option
  shouldRevealAnswer: boolean = false;
  ifSelected: boolean;
  
  exampleMethodParent($event) {
    this.exPa = $event;
    this.ifSelected = this.exPa.ifSelected;
    console.log(this.exPa);
  }

  onGo() {
    //check if the option is true and add img
    if (!this.shouldRevealAnswer) {
      this.shouldRevealAnswer = true;
    } else {
      this.shouldRevealAnswer = false;
      this.ifSelected = false;
      this.whichQuestion++;
      if (this.exPa.option.isAnswer) {
        this.totalScore++;
      }
    }
  }

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.getData();
    this.ifSelected = false;
  }

  getData() {
    //get the data from API
    this.data = this.questionsService.fetchQuestions();

    this.data.subscribe(res => {
      res.results.map((ques, i) => {
        ques.incorrect_answers.map(option => {
          this.options.push(new Option({name: option, isAnswer: false}));
        });
        this.options.push(
          new Option({name: ques.correct_answer, isAnswer: true})
        );
        let newOptions = this.shuffle(this.options);
        this.questions[i] = {
          id: i,
          name: ques.question,
          answers: newOptions
        };

        this.options = [];
      });
    });
  }
  shuffle(questions) {
    //shuffle the options
    var i, j, temp;
    for (i = questions.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
    return questions;
  }
}
