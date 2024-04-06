import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: 'app-home', component: AppHomeComponent},
  {path: 'teams', component: TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
