import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { ClassesDetailsComponent } from './components/classes-details/classes-details.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsListComponent } from './components/students-list/students-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClassesComponent,
    ClassesDetailsComponent,
    ClassesListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
