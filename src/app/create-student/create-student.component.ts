import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DeptCollege } from '../dept-college';
import { AddStudent } from '../add-student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  requiredForm: FormGroup;
  student: Student = new Student();
  deptcollege: DeptCollege = new DeptCollege();
  addstudent: AddStudent=new AddStudent();
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
    this.addstudent= new AddStudent();
  }

  save() {
    this.studentService.createStudent(this.addstudent).subscribe(data => {
      console.log(data)
      this.addstudent = new AddStudent();
      this.gotoList();
      
    }, 
    error => console.log(error));

   

  }
  

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
  list(){
    this.router.navigate(['main']);
  }
}

