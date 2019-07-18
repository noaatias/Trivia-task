import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { appRoutes } from './routes';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangeButtonDirective } from './change-button.directive';
import {HttpClientModule} from '@angular/common/http';
import {QuestionsService} from './questions.service';
import { QuestionComponent } from './quiz/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavbarComponent,
    ChangeButtonDirective,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
