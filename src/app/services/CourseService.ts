import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch('https://wbdv-f19-khomchenko-server.herokuapp.com/api/courses')
      .then(response => response.json())

  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-f19-khomchenko-server.herokuapp.com/api/courses/${courseId}/modules`)
      .then(response => response.json())

  findLessonsForModule = (id) =>
    fetch(`https://wbdv-f19-khomchenko-server.herokuapp.com/api/modules/${id}/lessons`)
      .then(response => response.json())
}
