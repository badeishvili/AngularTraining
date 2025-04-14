import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  title = 'List of Courses';
  courses;

  isActive = true;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event: MouseEvent) {
    $event.stopPropagation(); //Prevents from bubbling
    console.log('Button was clicked', $event);
  }

  // onKeyUp($event: KeyboardEvent) {
  //   if ($event.keyCode === 13) { console.log('Enter was pressed', $event); }
  // }
  email = "me@example.com";
  isFavorite: boolean = true;
  onKeyUp() {

    console.log(this.email);
  }

}
