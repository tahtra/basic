import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {soundDevicesRoute} from '../../routes/sound-devices.route';
import {SoundDevicesComponent} from './component/sound-devices.component';


@NgModule({
	declarations: [
		SoundDevicesComponent
	],
	imports: [
		RouterModule.forChild(soundDevicesRoute),

		CommonModule
	]
})
export class SoundDevicesModule {
}
