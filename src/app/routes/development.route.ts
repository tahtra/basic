import {Routes} from '@angular/router';
import {
	MotherboardsDevelopmentComponent
} from '../pages/motherboards/development/component/motherboards-development.component';


export const developmentRoute: Routes = [
	{
		path: '',
		component: MotherboardsDevelopmentComponent
	},
	{
		path: ':id',
		component: MotherboardsDevelopmentComponent
	}
];
