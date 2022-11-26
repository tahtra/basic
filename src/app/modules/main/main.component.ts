import { Component } from '@angular/core';
import {RoutesList} from '../../../common/lists/routes.list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  routesList = RoutesList;
}
