import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { StudentServiceService } from "./student-service.service"
import { College } from './college';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome to Student Management System';
  code=1234
  
  college: Observable<College[]>;

  constructor(private studentService: StudentServiceService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
      
    }
  
    reloadData() {
      this.college = this.studentService.getCollegeList();
    }

   

  collegeDetails(id: number){
    this.router.navigate(['college', id]);
  }

  
  list(){
    this.router.navigate(['main']);
  }
}