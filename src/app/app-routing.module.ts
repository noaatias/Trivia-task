import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'results/:all/:totalScore', component: ResultsComponent },
  { path: '**', redirectTo: 'quiz' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]

})

export class AppRoutingModule { 

  
}
