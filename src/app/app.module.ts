import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseGridComponent} from './course-grid-component/course-grid-component.component';
import { ModuleListComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import {TopicPillsComponent} from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponent } from './widget-list-component/widget-list-component.component';
import {LoginComponent} from './login-component/login-component.component';
import {RegisterComponent} from './register-component/register-component.component';
import { ProfileComponent } from './profile-component/profile-component.component';
import {CourseService} from './services/CourseService';
import {ModuleService} from './services/ModuleService';
import {RouterModule, Routes} from '@angular/router';
import {LessonService} from './services/LessonService';
import {TopicService} from './services/TopicService';
import {WidgetService} from './services/WidgetService';



@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    TopicService,
    WidgetService
  ],
  entryComponents:[ModuleListComponent,
    LessonTabsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
