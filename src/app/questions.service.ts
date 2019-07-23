import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  fetchQuestions(): any {
    return this.http.get("https://opentdb.com/api.php?amount=10&type=multiple");
  }
}
