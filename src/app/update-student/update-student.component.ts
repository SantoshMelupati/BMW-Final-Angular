import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {


  students: Observable<Student[]>;

  constructor(private studentService: StudentServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentsList();
  }



  studentDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateStudent(id: number){
    this.router.navigate(['update', id]);
  }
  list(){
    this.router.navigate(['main']);
  }
}
