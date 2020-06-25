import { Component, OnInit } from '@angular/core';

import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css'],
})
export class AddClassesComponent implements OnInit {
  classes = {
    code: '',
    name: '',
    max_students: '',
    status: '',
    description: '',
  };
  submitted = false;

  constructor(private classesService: ClassesService) {}

  ngOnInit(): void {}
  

  saveClasses() {
    const data = {
      code: this.classes.code,
      name: this.classes.name,
      max_students: this.classes.max_students,
      status: this.classes.status,
      description: this.classes.description,
    };

    this.classesService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }



  newClasses() {
    this.submitted = false;
    this.classes = {
      code: '',
      name: '',
      max_students: '',
      status: '',
      description: '',
    };
  }
}
