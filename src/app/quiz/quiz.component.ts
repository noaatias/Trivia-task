import { Component, OnInit } from "@angular/core";
import { Option } from "../models/option";
import { QuestionsService } from "../questions.service";
import { Router, ActivatedRoute } from "@angular/router";

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

  exampleMethodParent($event) {
    this.exPa = $event;
  }

  onGo(event) {
    //check if the option is true and add img
    console.log(this.shouldRevealAnswer);

    if (event.target["innerText"] == "OK") {
      this.shouldRevealAnswer = true;
      event.target["innerHTML"] = "continue";

      // selectedButton["innerHTML"] =
      //   '<img src="/assets/Group3.png" id="img3" />' +
    } //   selectedButton["innerHTML"];
    else {
      this.shouldRevealAnswer = false;

      // selectedButton["innerHTML"] =
      //   '<img src="/assets/Group.png" id="img3" />' +
      //   selectedButton["innerHTML"];
      if (this.exPa.isAnswer) {
        this.totalScore++;
      }
      this.whichQuestion++;
      event.target.innerText = "OK";
    }
  }

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    //get the data from API
    this.data = this.questionsService.fetchQuestions();

    this.data.subscribe(res => {
      res.results.map((ques, i) => {
        ques.incorrect_answers.map(option => {
          this.options.push(new Option({ name: option, isAnswer: false }));
        });
        this.options.push(
          new Option({ name: ques.correct_answer, isAnswer: true })
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
