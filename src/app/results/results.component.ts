import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
@Input() totalScore:number;
@Input() all:number;
newGame:boolean=false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }
newGameStart(){
  this.newGame=true;

}
}
