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
  @Output() exampleOutput = new EventEmitter<any>();
  selected: boolean = false;

  onSelect( option): void {
    //choose one option and save this
    if (this.selected) {
      
        this.selected = false;
      
    } else {
      this.selected = true;
    }
  }

  exampleMethodChild() {
    this.exampleOutput.emit(this.option);
  }
  constructor() {}

  ngOnInit() {}
}
