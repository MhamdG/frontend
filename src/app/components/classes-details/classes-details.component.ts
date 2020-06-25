import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrls: ['./classes-details.component.css'],
})
export class ClassesDetailsComponent implements OnInit {
  currentClass = null;
  message = '';

  constructor(
    private classesService: ClassesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getClasses(this.route.snapshot.paramMap.get('id'));
  }

  getClasses(id) {
    this.classesService.get(id).subscribe(
      (data) => {
        this.currentClass = data;
        console.log('asdasd',data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateStatus(status) {
    const data = {
      code: this.currentClass.code,
      name: this.currentClass.name,
      max_students: this.currentClass.max_students,
      description: this.currentClass.description,
      Status: status,
    };

    this.classesService.update(this.currentClass.id, data).subscribe(
      (response) => {
        this.currentClass.status = status;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateClasses() {
    this.classesService
      .update(this.currentClass.id, this.currentClass)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The Classes was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteClasses() {
    this.classesService.delete(this.currentClass.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/classes']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
