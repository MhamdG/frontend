import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { ClassesDetailsComponent } from './components/classes-details/classes-details.component';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';


const routes: Routes = [

  { path: 'classes', redirectTo: 'classes', pathMatch: 'full' },
  { path: 'classes', component: ClassesListComponent },
  { path: 'classes/:id', component: ClassesDetailsComponent },
  { path: 'add', component: AddClassesComponent },

  { path: 'students', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'add', component: AddStudentComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
