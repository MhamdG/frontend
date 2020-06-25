import { Component, OnInit } from '@angular/core';
import { ClassesService } from "src/app/services/classes.service";

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  classes: any;
  currentClass = null;
  currentIndex = -1;
  name = '';


  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
    this.retrieveClasses();
  }
  retrieveClasses() {
    this.classesService.getAll()
      .subscribe(
        data => {
          this.classes = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveClasses();
    this.currentClass = null;
    this.currentIndex = -1;
  }

  setActiveClasse(classe, index) {
    this.currentClass = classe;
    this.currentIndex = index;
  }

}