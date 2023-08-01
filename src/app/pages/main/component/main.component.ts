import {Component} from '@angular/core';
import {RoutesList} from '@constants';


@Component({
	templateUrl: './main.component.html',
	styles: [
		`
			:host {
				display:         flex;
				align-items:     center;
				justify-content: center;
				width:           100%;
			}`
	]
})
export class MainComponent {
	routesList = RoutesList;
}
