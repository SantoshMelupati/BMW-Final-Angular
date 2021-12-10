import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { College } from '../college';
import { StudentServiceService } from "../student-service.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  id: number;
  college: College;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentServiceService) { }

  ngOnInit() {
    
    this.college = new College();

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getCollege(this.id)
      .subscribe(data => {
        console.log(data)
        this.college = data;
      }, error => console.log(error));

      
      
  }

 

  list(){
    this.router.navigate(['main']);
  }
}
