import {Injectable} from '@angular/core';

@Injectable()
export class TopicService {

  findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-f19-khomchenko-server.herokuapp.com/api/lessons/${lessonId}/topics`)
      .then(response => response.json())

}
