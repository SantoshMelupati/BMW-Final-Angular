import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student-form',
  templateUrl: './update-student-form.component.html',
  styleUrls: ['./update-student-form.component.css']
})
export class UpdateStudentFormComponent implements OnInit {

  id: number;
  student: Student;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentServiceService) { }

  ngOnInit() {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStudent();    
  }

  gotoList() {
    this.router.navigate(['/main']);
  }
}

