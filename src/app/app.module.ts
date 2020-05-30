import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CoursesComponent } from './courses/courses.component';
import { CoursecontinueComponent } from './coursecontinue/coursecontinue.component';
import { CompletionComponent } from './completion/completion.component';
import { CoursevideosComponent } from './coursevideos/coursevideos.component';


const appRoutes: Routes = [
  { path: '' ,component: IndexComponent, data: {animation: 'HomePage'}},
  { path: 'login' ,component: LoginComponent, data: {animation: 'loginPage'}},
  { path: 'courses' ,component: CoursesComponent, data: {animation: 'CoursesPage'}},
  { path: 'coursesContinue' ,component: CoursecontinueComponent, data: {animation: 'ContinuePage'}},
  { path: 'completion' ,component: CompletionComponent, data: {animation: 'Completion'}}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    CoursesComponent,
    CoursecontinueComponent,
    CompletionComponent,
    CoursevideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonToggleModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
