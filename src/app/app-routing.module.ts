import {CourseGridComponent} from './course-grid-component/course-grid-component.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleListComponent} from './module-list-component/module-list-component.component';
import {LoginComponent} from './login-component/login-component.component';
import {RegisterComponent} from './register-component/register-component.component';
import {ProfileComponent} from './profile-component/profile-component.component';
// import {LoginComponent} from './login/login.component';
// import {RegisterComponent} from './register/register.component';
// import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
// import {ProfileComponent} from './profile/profile.component';
// import {AdminUsersComponent} from './admin-users/admin-users.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'courses', component: CourseGridComponent},
  {path: 'course/:courseId/modules', component: CourseGridComponent},
  {path: 'course/:courseId/modules/:moduleId/lessons', component: CourseGridComponent},
  {path: 'course/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseGridComponent},
  {path: 'course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets',
    component: CourseGridComponent}

  // {path: 'admin-users', component: AdminUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
