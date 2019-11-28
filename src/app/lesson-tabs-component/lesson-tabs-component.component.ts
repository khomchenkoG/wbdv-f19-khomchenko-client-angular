import {Component, Input, OnInit} from '@angular/core';
import {ModuleService} from '../services/ModuleService';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../services/LessonService';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonService, private route: ActivatedRoute) { }

  moduleId;
  courseId;
  lessons;
  activeLesson = -1;

  selectLesson(lesson) {
    this.activeLesson = lesson.id
}

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.moduleId = param['moduleId'];
        this.courseId = param['courseId'];
        console.log(this.moduleId)
        this.service.findLessonsFroModule(this.moduleId).then(lessons => {
          this.lessons = lessons;
        });
      });
  }

}
