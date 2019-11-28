import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {

  findModulesForCourse = (courseId) =>

    fetch(`https://wbdv-f19-khomchenko-server.herokuapp.com/api/courses/${courseId}/modules`)
      .then(response => response.json())


}
