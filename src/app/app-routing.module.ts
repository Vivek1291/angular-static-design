import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
