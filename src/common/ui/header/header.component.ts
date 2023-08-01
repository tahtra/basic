import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';


@Component({
	selector: 'app-header',
	standalone: true,
	template: `
		<button mat-icon-button routerLink="/main">
			<mat-icon>home</mat-icon>
		</button>
		<div class="spacer"></div>
		<ng-content></ng-content>`,
	imports: [
		MatIconModule,
		MatButtonModule,
		RouterLink
	],
	styles: [
		`:host {
			--max-width:      1400px;
			position:         fixed;
			z-index:          5;
			display:          flex;
			align-items:      center;
			width:            100%;
			min-height:       var(--header-height, 60px);
			background-color: #3f51b5;
			color:            #c2c2c2;
			box-sizing:       content-box;
			max-width:        var(--max-width);
			padding:          0 calc((100vw - var(--max-width)) / 2);
		}
		`
	]
})
export class HeaderComponent {}
