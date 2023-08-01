import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {NumberOnlyDirective} from '../../../../common/directives';
import {developmentRoute} from '../../../routes/development.route';
import {MotherboardsDevelopmentComponent} from './component/motherboards-development.component';


@NgModule({
	declarations: [
		MotherboardsDevelopmentComponent
	],
	imports: [
		RouterModule.forChild(developmentRoute),
		CommonModule,

		FormsModule,
		ReactiveFormsModule,

		MatStepperModule,
		MatButtonModule,
		MatCheckboxModule,
		MatInputModule,
		MatRadioModule,
		MatSliderModule,

		NumberOnlyDirective,
		MatTooltipModule,
		DragDropModule
	]
})
export class DevelopmentModule {
}
