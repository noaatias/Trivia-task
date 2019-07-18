import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeButton]'
})
export class ChangeButtonDirective {
  @Input('appChangeButton') selected: boolean;
unclick:number=0;
  constructor(private el: ElementRef) { }
  
  @HostListener('click') onMouseEnter() {
    if(this.selected&&this.unclick==0){
      console.log('cant click')
      console.log()
    }
    else{
      if(this.unclick==0){
        this.ChangeButton('blue')
        this.unclick=1;
        console.log(this.unclick)
      }
      else{
        this.ChangeButton('rgb(231, 191, 191)')
        this.unclick=0;
  
      }
    }
 
   

  }
 
 
 
  private ChangeButton(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

