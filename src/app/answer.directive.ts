import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input
} from "@angular/core";
import { Option } from "./models/option";

@Directive({
  selector: "[appAnswer]"
})
export class AnswerDirective {
  @Input("appAnswer") selectedButton: Event;
  @Input() option: Option;

  unclick: number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") onMouseEnter() {

    if (this.unclick == 0) {//change the color of the button.only when click ok.
      if (this.option.isAnswer) {
        this.selectedButton["style"].borderColor = "#33C933";
      } else {
        this.selectedButton["style"].borderColor = "#FB4343 ";
      }
      this.unclick = 1;
    } else {
      this.unclick = 0;
    }
  }

}
