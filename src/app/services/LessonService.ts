import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {

  findLessonsFroModule = (moduleId) =>
    fetch(`https://wbdv-f19-khomchenko-server.herokuapp.com/api/modules/${moduleId}/lessons`)
      .then(response => response.json())


}
