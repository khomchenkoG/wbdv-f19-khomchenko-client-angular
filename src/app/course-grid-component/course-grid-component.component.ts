import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CourseService} from '../services/CourseService';
import {ModuleListComponent} from '../module-list-component/module-list-component.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponent implements OnInit {
  // @ViewChild("moduleContainer", { read: ViewContainerRef }) container;
  // @ViewChild("lessonContainer", { read: ViewContainerRef }) container1;
  // componentRef: ComponentRef;

  courses = []
  activeCourse;
  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }




  selectCourse(course) {
    this.activeCourse = course.id;
    // this.container.clear();
    // const factory: ComponentFactory = this.resolver.resolveComponentFactory(ModuleListComponent);
    // this.componentRef = this.container.createComponent(factory);
    // this.courseService.findModulesForCourse(course.id)
    //   .then(modules => this.componentRef.instance.modules = modules);
  }

  // selectModule(module) {
  //   this.courseService.findLessonsForModule(module.id)
  //     .then(lessons => this.lessons = lessons);
  // }


  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
    this.route.params.subscribe(
      param => {
        this.activeCourse = param['courseId'] ? param['courseId'] : -1;
        console.log(this.activeCourse);
        });

  }

}
