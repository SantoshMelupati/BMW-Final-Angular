import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-search-college',
  templateUrl: './search-college.component.html',
  styleUrls: ['./search-college.component.css']
})
export class SearchCollegeComponent implements OnInit {

 

  
  todaydate;
  componentproperty;
  formdata;
  student: Observable<Student[]>;
  constructor(private studentService: StudentServiceService,
     private router: Router) {}
  ngOnInit() {
     this.formdata = new FormGroup({
        clge: new FormControl(""),
     });

     
     
  }

 
  onClickSubmit(data) {
     
     this.student = this.studentService.getStudentByCollege(data.clge)
     }

     list(){
        this.router.navigate(['main']);
      }
    
}
