import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHomeComponent } from './app-home/app-home.component';
import { TeamsComponent } from './teams/teams.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DelBlogComponent } from './del-blog/del-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    TeamsComponent,
    AddBlogComponent,
    DelBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, NgbModule, BrowserAnimationsModule,   MatToolbarModule,
    MatButtonModule,
    MatCardModule, MatIconModule,
    MatBadgeModule, MatGridListModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
