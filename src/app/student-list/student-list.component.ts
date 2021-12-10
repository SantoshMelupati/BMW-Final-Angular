import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Student } from "../student";
import { StudentServiceService } from "../student-service.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: Observable<Student[]>;

  constructor(private studentService: StudentServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.student = this.studentService.getStudentsList();
  }

  

  studentDetails(id: number){
    this.router.navigate(['details', id]);
  }

  
  list(){
    this.router.navigate(['main']);
  }
}