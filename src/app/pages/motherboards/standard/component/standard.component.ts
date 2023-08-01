import {Component} from '@angular/core';


@Component({
	templateUrl: './standard.component.html',
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
export class StandardComponent {
}
