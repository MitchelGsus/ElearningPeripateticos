import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardteacherComponent } from './components/dashboardteacher/dashboardteacher.component';
import { UserComponent } from './components/user/user.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AdmindashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'profesordashboard',component:DashboardteacherComponent},
  {path:'usuariodashboard',component:UserComponent},
  {path:'addcourse',component:AddcourseComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }