import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-departmentofcollege',
  templateUrl: './departmentofcollege.component.html',
  styleUrls: ['./departmentofcollege.component.css']
})
export class DepartmentofcollegeComponent implements OnInit {
  id: number;
  department: Department;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentServiceService) { }

  ngOnInit() {
    
    this.department = new Department();

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getDepartment(this.id)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));

      
      
  }

 

  list(){
    this.router.navigate(['main']);
  }
}

