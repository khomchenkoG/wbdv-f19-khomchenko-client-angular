import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {

  findWidgetsForTopic = (topicId) =>
    fetch(`https://wbdv-f19-khomchenko-server.herokuapp.com/api/topics/${topicId}/widgets`)
      .then(response => response.json())
}
