import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path : 'search', component: SearchComponent , pathMatch: 'full' },
  { path : 'question', component: CreateQuestionComponent , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
