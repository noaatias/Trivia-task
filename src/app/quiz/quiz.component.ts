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
  selectedButton: any;
  selectedOption: Option;
  onSelect(button, option): void {
    if (button.currentTarget.style.borderColor == "rgb(13, 123, 171)") {
      if (this.selected) {
        if (this.selectedOption == option) {
          this.selectedButton = null;
          this.selectedOption = null;
          this.selected = false;
        }
      } else {
        this.selectedOption = option;
        this.selectedButton = button.currentTarget;
        this.selected = true;
      }
    }
  }

  onGo(selectedButton, selectedOption, event): void {
    if (event.target["innerText"] == "OK") {
      if (selectedOption.isAnswer == false) {
        selectedButton["innerHTML"] =
          '<img src="/assets/Group3.png" id="img3" />' +
          selectedButton["innerHTML"];
      } else {
        this.totalScore++;
        selectedButton["innerHTML"] =
          '<img src="/assets/Group.png" id="img4" />' +
          selectedButton["innerHTML"];
      }
      event.target["innerHTML"] = "continue";
    } else {
      this.whichQuestion++;
      event.target.innerText = "OK";
      this.selected = false;
    }
    this.selectedButton = null;
    this.selectedOption = null;
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
