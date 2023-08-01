import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {motherboardsRoute} from '../../routes/motherboards.route';
import {MotherboardsComponent} from './component/motherboards.component';


@NgModule({
	declarations: [
		MotherboardsComponent
	],
	imports: [
		RouterModule.forChild(motherboardsRoute),
		CommonModule
	]
})
export class MotherboardsModule {
}
