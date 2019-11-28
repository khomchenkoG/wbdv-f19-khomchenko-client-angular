import { Component, OnInit } from '@angular/core';
import {LessonService} from '../services/LessonService';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../services/TopicService';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponent implements OnInit {
  constructor(private service: TopicService, private route: ActivatedRoute) { }

  lessonId;
  moduleId;
  courseId;
  topics;
  activeTopic = -1;

  selectTopic(topic) {
    this.activeTopic = topic.id;
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.lessonId = param['lessonId']
        this.moduleId = param['moduleId'];
        this.courseId = param['courseId'];
        console.log(this.moduleId)
        this.service.findTopicsForLesson(this.lessonId).then(topics => {
          this.topics = topics;
        });
      });
  }

}

