import { Component, OnInit } from "@angular/core";
import { Question } from "../models/question";
import { Option } from "../models/option";
import { QuestionsService } from "../questions.service";

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
  selectedButton: any;
  selectedOption: Option;
  onSelect(button,option): void {
    if (this.selected) {
      if(this.selectedOption==option){
  this.selectedButton = null;
      this.selectedOption = null;
      this.selected = !this.selected;
      }
    

    } else {
      this.selectedOption = option;
      this.selectedButton = button;
      this.selected = !this.selected;
    }
  }
  onGo(selectedButton, selectedOption, event): void {
    if (event.target["innerHTML"] == "go") {
      if (selectedOption.isAnswer == false) {
        selectedButton.path[0].innerHTML = '<img src="/assets/Group3.png" id="img3" />'+
        selectedButton.path[0].innerHTML 
       ;
 
          ;
      } else {

        selectedButton.path[0].innerHTML = '<img src="/assets/Group.png" id="img3" />'+
        selectedButton.path[0].innerHTML 
         ;
      }
      event.target["innerHTML"] = "continue";
    } else if (event.target["innerHTML"] == "continue") {
      this.whichQuestion++;
      event.target["innerHTML"] = "go";
      console.log(event.target["innerHTML"]);
      this.selected = false;

    }
    this.selectedButton = null;
    this.selectedOption = null;
  }
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.data = this.questionsService.fetchQuestions();
    this.data.subscribe(res => {
      res.map((ques, i) => {
        ques.incorrect_answers.map(option => {
          this.options.push(new Option({ name: option, isAnswer: false }));
        });
        this.options.push(
          new Option({ name: ques.correct_answer, isAnswer: true })
        );

        this.questions[i] = {
          id: i,
          name: ques.question,
          answers: this.options
        };
        this.options = [];
      });
      console.log(this.questions);
    });
  }
}
