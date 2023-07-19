import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardteacherComponent } from './components/dashboardteacher/dashboardteacher.component';
import { UserComponent } from './components/user/user.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardteacherComponent,
    UserComponent,
    AddcourseComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationsuccessComponent,
    ApprovalstatusComponent,
    ProfessorprofileComponent,
    ProfessorlistComponent,
    AddchapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    YouTubePlayerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, RegistrationComponent]
})
export class AppModule { }
