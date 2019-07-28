import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  totalScore: any;
 all: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  this.all = this.route.snapshot.paramMap.get('all');
  this.totalScore = this.route.snapshot.paramMap.get('totalScore');


  }
}
