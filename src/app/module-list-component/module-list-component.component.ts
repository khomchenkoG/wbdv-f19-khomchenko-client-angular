import {
  Component,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';

import {ModuleService} from '../services/ModuleService';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponent implements OnInit {


  constructor(private service: ModuleService, private route: ActivatedRoute) {
  }

  lessons = [];
  modules = [];
  courseId = '';
  activeModule = -1;

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.courseId = param['courseId'];
        this.service.findModulesForCourse(this.courseId).then(modules => {
          this.modules = modules;
        });
      });
  }

  selectModule(module) {
    this.activeModule = module.id;
  }

  // selectModule(module) {
  //   this.activeModule = module.id;
  //   this.container.clear();
  //   const factory: ComponentFactory = this.resolver.resolveComponentFactory(LessonTabsComponent);
  //   this.componentRef = this.container.createComponent(factory);
  //   this.service.findLessonsFroModule(module.id)
  //     .then(lessons => this.componentRef.instance.lessons = lessons);
  // }

  // moduleClicked(module) {
  //   this.service.findModulesForCourse()
  //     .then(modules => this.modules = modules);
  // }


}
