import {Routes} from '@angular/router';
import {StandardComponent} from '../pages/motherboards/standard/component/standard.component';
import {PaymentComponent} from '../pages/motherboards/standard/payment/payment.component';


export const standardRoute: Routes = [
	{
		path: '',
		component: StandardComponent,
		title: 'Basic | Standard Motherboard'
	},
	{
		path: 'payment',
		component: PaymentComponent,
		title: 'Basic | Payment'
	},
];
