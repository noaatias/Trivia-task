import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appChangeButton]"
})
export class ChangeButtonDirective {
  @Input("appChangeButton") selected: boolean;
  unclick: number = 0;
  constructor(private el: ElementRef) {}

  @HostListener("click") onMouseEnter() {
    if (this.selected && this.unclick == 0) {
      console.log("cant click");
    } else {
      if (this.unclick == 0) {
        this.ChangeButton("4px solid #0D7BAB");
        this.unclick = 1;
        console.log(this.unclick);
      } else if (
        this.el.nativeElement.style.borderColor == "rgb(13, 123, 171)"
      ) {
        this.ChangeButton("2px solid #D9E6EB");
        this.unclick = 0;
      }
    }
  }

  private ChangeButton(color: string) {
    this.el.nativeElement.style.border = color;
  }
}
