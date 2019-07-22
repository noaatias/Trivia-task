import {Routes} from '@angular/router'
import { QuizComponent } from './quiz/quiz.component';
export const appRoutes:Routes =[
    { path: '',   redirectTo: '/NewGame', pathMatch: 'full' },

    { path: 'NewGame', component: QuizComponent }
    

]