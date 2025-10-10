import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FooterComponent } from './footer/footer.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { CourseListComponent } from './course/course-list.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthServiceService } from './auth-service.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    UserComponent,
    UserListComponent,
    RoleComponent,
    StudentComponent,
    FacultyComponent,
    CollegeComponent,
    CourseComponent,
    MarksheetComponent,
    SubjectComponent,
    TimetableComponent,
    FooterComponent,
    RoleListComponent,
    CollegeListComponent,
    StudentListComponent,
    MarksheetListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    CourseListComponent,
    MyprofileComponent,
    ChangepasswordComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [

      HttpServiceService,
      EndpointServiceService,
      ServiceLocatorService,
      AuthServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
