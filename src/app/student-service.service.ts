import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private baseUrl = 'http://localhost:8008/springboot-crud-rest/api/v1/students';

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getStudentByDepartment(deptCollege: object): Observable<any> {
    return this.http.post(`http://localhost:8008/springboot-crud-rest/api/v1/departments`, deptCollege);
  }

  getStudentByCollege(College: string):Observable<any>{
    return this.http.get(`http://localhost:8008/springboot-crud-rest/api/v1/college/${College}`);

  }

  


  getCollege(id: number): Observable<any> {
    return this.http.get(`http://localhost:8008/springboot-crud-rest/api/v1/colleges/${id}`);
  }

  getDepartment(id: number): Observable<any> {
    return this.http.get(`http://localhost:8008/springboot-crud-rest/api/v1/departments/${id}`);
  }

  createStudent(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  createDeptCollege(dept: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dept);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCollegeList(): Observable<any> {
    return this.http.get(`http://localhost:8008/springboot-crud-rest/api/v1/colleges`);
  }

  

}
