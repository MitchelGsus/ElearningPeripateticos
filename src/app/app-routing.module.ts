import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardteacherComponent } from './components/dashboardteacher/dashboardteacher.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { RouterGuard } from './guards/router.guard';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { ProfessorGuard } from './guards/professor.guard';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { AdminGuard } from './guards/admin.guard';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserGuard } from './guards/user.guard';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registrationsuccess', component: RegistrationsuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'professordashboard', component: DashboardteacherComponent },
  { path: 'userdashboard', component: UserdashboardComponent, canActivate: [UserGuard] },
  { path: 'addCourse', component: AddcourseComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'approveprofessor', component: ApprovalstatusComponent, canActivate: [RouterGuard] },
  { path: 'editprofessorprofile', component: ProfessorprofileComponent, canActivate: [ProfessorGuard] },
  { path: 'professorlist', component: ProfessorlistComponent, canActivate: [RouterGuard] },
  { path: 'addchapter', component: AddchapterComponent, canActivate: [RouterGuard] },
  { path: 'courselist', component: CourselistComponent, canActivate: [RouterGuard] },
  { path: 'userlist', component: UserlistComponent, canActivate: [RouterGuard] },
  { path: 'addProfessor', component: AddprofessorComponent, canActivate: [AdminGuard] },
  { path: 'mywishlist', component: MywishlistComponent, canActivate: [RouterGuard] },
  { path: 'fullcourse/:coursename', component: FullcourseComponent, canActivate: [RouterGuard] },
  { path: 'edituserprofile', component: UserprofileComponent, canActivate: [RouterGuard] },
  { path: 'mycourses', component: MycoursesComponent, canActivate: [RouterGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }