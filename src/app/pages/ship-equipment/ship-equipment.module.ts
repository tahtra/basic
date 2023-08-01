import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {shipEquipmentRoute} from '../../routes/ship-equipment.route';
import {ShipEquipmentComponent} from './component/ship-equipment.component';


@NgModule({
	declarations: [
		ShipEquipmentComponent
	],
	imports: [
		RouterModule.forChild(shipEquipmentRoute),

		CommonModule
	]
})
export class ShipEquipmentModule {
}
