import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {standardRoute} from '../../../routes/standard.route';
import {StandardComponent} from './component/standard.component';


@NgModule({
	declarations: [
		StandardComponent
	],
	imports: [
		RouterModule.forChild(standardRoute),
		CommonModule
	]
})
export class StandardModule {
}
