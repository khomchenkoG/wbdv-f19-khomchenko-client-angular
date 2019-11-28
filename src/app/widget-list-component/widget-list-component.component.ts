import { Component, OnInit } from '@angular/core';
import {TopicService} from '../services/TopicService';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../services/WidgetService';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetService, private route: ActivatedRoute) { }

  topicId;
  lessonId;
  moduleId;
  courseId;
  widgets;
  activeTopic = -1;

  selectTopic(topic) {
    this.activeTopic = topic.id;
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.topicId = param['topicId'] ;
        this.lessonId = param['lessonId']
        this.moduleId = param['moduleId'];
        this.courseId = param['courseId'];
        console.log(this.moduleId)
        this.service.findWidgetsForTopic(this.topicId).then(widgets => {
          this.widgets = widgets;
        });
      });
  }
}
