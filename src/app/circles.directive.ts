import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input
} from "@angular/core";
import { Option } from "./models/option";

@Directive({
  selector: "[appCircles]"
})
export class CirclesDirective {
  @Input("appCircles") selectedButton: Event;
  @Input() option: Option;

  unclick: number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") onMouseEnter() {
    console.log(event);

    console.log('circle')
    if (this.unclick == 0) {
      console.log(this.option.isAnswer);
      if (this.option.isAnswer) {
        console.log(this.selectedButton["style"].borderColor)
        this.selectedButton["style"].borderColor = "#33C933";
      } else {
        console.log("false",  this.selectedButton["style"].borderColor);
        this.selectedButton["style"].borderColor = "#FB4343 ";
      }
      this.unclick = 1;
    } else {
      this.unclick = 0;
    }
  }

  private ChangeCircle(event) {
  }
}
