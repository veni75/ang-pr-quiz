import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QuizComponent } from 'src/app/page/quiz/quiz.component';
import { QuizEditorComponent } from './page/quiz-editor/quiz-editor.component';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/:id',
    component: QuizEditorComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home/:id',
    component: QuizComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
