import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentFormComponent } from './update-student-form/update-student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiplestudentComponent } from './multiplestudent/multiplestudent.component';
import { CollegeComponent } from './college/college.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentofcollegeComponent } from './departmentofcollege/departmentofcollege.component';
import { SearchdepartmentComponent } from './searchdepartment/searchdepartment.component';
import { SearchhomeComponent } from './searchhome/searchhome.component';
import { SearchCollegeComponent } from './search-college/search-college.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    StudentListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateStudentFormComponent,
    MultiplestudentComponent,
    CollegeComponent,
    DepartmentComponent,
    DepartmentofcollegeComponent,
    SearchdepartmentComponent,
    SearchhomeComponent,
    SearchCollegeComponent,

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
