import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {softwareRoute} from '../../routes/software.route';
import {SoftwareComponent} from './component/software.component';


@NgModule({
	declarations: [
		SoftwareComponent
	],
	imports: [
		RouterModule.forChild(softwareRoute),

		CommonModule
	]
})
export class SoftwareModule {
}
