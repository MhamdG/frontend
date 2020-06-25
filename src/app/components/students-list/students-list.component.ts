import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students: any;
  currentStudent = null;
  currentIndex = -1;
  first_name = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.retrieveStudents();
  }
  retrieveStudents() {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }

  setActiveStudent(tutorial, index) {
    this.currentStudent = tutorial;
    this.currentIndex = index;
  }

}
