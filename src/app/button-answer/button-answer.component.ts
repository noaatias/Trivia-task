import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Option } from "../models/option";

@Component({
  selector: "app-button-answer",
  templateUrl: "./button-answer.component.html",
  styleUrls: ["./button-answer.component.css"]
})
export class ButtonAnswerComponent implements OnInit {
  @Input() option: Option;

  @Input() shouldRevealAnswer: boolean;
  @Input() ifSelected: boolean;

  @Output() exampleOutput = new EventEmitter<{
    option: Option;
    ifSelected: boolean;
  }>();

  selected: boolean = false;

  onSelect(option): void {
    //choose one option and save thisi
    if (this.selected == false) {
      if (this.ifSelected == false) {
        this.ifSelected = true;
        this.selected = true;
      }
    } else {
      if (this.ifSelected == true) {
        this.ifSelected = false;
        this.selected = false;
      }
    }
  }

  exampleMethodChild() {
    this.exampleOutput.emit({
      option: this.option,
      ifSelected: this.ifSelected
    });
  }
  constructor() {}

  ngOnInit() {}
}
