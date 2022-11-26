import { Component } from '@angular/core';
import {RoutesList} from '../common/lists/routes.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  routesList = RoutesList;
}
