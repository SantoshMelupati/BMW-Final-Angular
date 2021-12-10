import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { DeptCollege } from '../dept-college';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-searchdepartment',
  templateUrl: './searchdepartment.component.html',
  styleUrls: ['./searchdepartment.component.css']
})
export class SearchdepartmentComponent implements OnInit {

   requiredForm: FormGroup;
   student: Observable<Student[]>;
   deptCollege: DeptCollege = new DeptCollege();
   submitted = false;
  
 
   constructor(private studentService: StudentServiceService,private fb: FormBuilder,
     private router: Router) {
       this.myForm();
      }
 
    
   
  
     //Create required field validator for name
     myForm() {
        this.requiredForm = this.fb.group({
        name: ['', Validators.required ]
        });
     }
 
   ngOnInit() {
   }
 
   newEmployee(): void {
     this.submitted = false;
     this.deptCollege= new DeptCollege();
   }
 
  

   save() {
     
 
     this.studentService.getStudentByDepartment(this.deptCollege).subscribe(data => {
       console.log(data)
       this.deptCollege = new DeptCollege();
       this.gotoList();
     }, 
     error => console.log(error));
 
   }
   
 
   onSubmit() {
     this.submitted = true;
     this.save();    
     this.student = this.studentService.getStudentByDepartment(this.deptCollege)
   }
 
   gotoList() {
     this.router.navigate(['/employees']);
   }
   list(){
     this.router.navigate(['main']);
   }
 }
 