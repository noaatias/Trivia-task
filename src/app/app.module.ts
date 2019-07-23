import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { ChangeButtonDirective } from "./change-button.directive";
import { HttpClientModule } from "@angular/common/http";
import { QuestionsService } from "./questions.service";
import { AnswerDirective } from "./answer.directive";
import { ResultsComponent } from "./results/results.component";

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavbarComponent,
    ChangeButtonDirective,

    AnswerDirective,
    ResultsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
