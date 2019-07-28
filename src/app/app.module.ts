import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { ResultsComponent } from "./results/results.component";
import { ButtonAnswerComponent } from './button-answer/button-answer.component';
import { QuestionsService } from './quiz/questions.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavbarComponent,

    ResultsComponent,
    ButtonAnswerComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
