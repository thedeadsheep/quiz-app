import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  constructor() { }
  studentList = [
    {},
    {},
    {},
  ]
  ngOnInit(): void {
  }
  deleteStudentToClass(/*studentId: number*/) {
    //console.log(studentId);
  }
}
