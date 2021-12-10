
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentFormComponent } from './update-student-form/update-student-form.component';
import { MultiplestudentComponent } from './multiplestudent/multiplestudent.component';
import { CollegeComponent } from './college/college.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentofcollegeComponent } from './departmentofcollege/departmentofcollege.component';
import { SearchdepartmentComponent } from './searchdepartment/searchdepartment.component';
import { SearchhomeComponent } from './searchhome/searchhome.component';
import { SearchCollegeComponent } from './search-college/search-college.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'add', component: CreateStudentComponent },
  { path: 'update/:id', component: UpdateStudentFormComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'college/:id', component: CollegeComponent },
  { path: 'department/:id', component: DepartmentComponent },
  { path: 'departmentofcollege/:id', component: DepartmentofcollegeComponent },
  { path: 'main', component: MainComponent },
  { path: 'detail', component: StudentDetailsComponent },
  { path: 'update', component: UpdateStudentComponent },
  { path: 'delete', component: DeleteStudentComponent },
  { path: 'students1', component: StudentListComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'search', component: SearchdepartmentComponent },
  {path:'multiplestudents',component: MultiplestudentComponent},
  { path: 'searchhome', component: SearchhomeComponent },
  { path: 'searchCollege', component: SearchCollegeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
