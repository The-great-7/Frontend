import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { COURSES } from '../../models/seed-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = COURSES;
  selectedCourse: Course;
  constructor() { }
  ngOnInit() {
  }
  onSelect(course: Course): void {
    this.selectedCourse = course;
  }
}
