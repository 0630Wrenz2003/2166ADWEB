import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { TeamsComponent } from './teams/teams.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DelBlogComponent } from './del-blog/del-blog.component';

const routes: Routes = [
  {path: 'app-home', component: AppHomeComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'del-blog', component: DelBlogComponent},
  {path: 'add-blog', component: AddBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
