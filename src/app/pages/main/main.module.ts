import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {mainRoute} from '../../routes/main.route';
import {MainComponent} from './component/main.component';


@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		RouterModule.forChild(mainRoute),
		CommonModule
	]
})
export class MainModule {
}
