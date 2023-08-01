import {Routes} from '@angular/router';
import {MotherboardsComponent} from '../pages/motherboards/component/motherboards.component';


export const motherboardsRoute: Routes = [
	{
		path: '',
		component: MotherboardsComponent,
	},
	{
		path: 'standard',
		loadChildren: () => import('../pages/motherboards/standard/standard.module').then(m => m.StandardModule),
	},
	{
		path: 'development',
		loadChildren: () => import('../pages/motherboards/development/development.module').then(m => m.DevelopmentModule),
	},
	{
		path: 'shopping-cart',
		loadChildren: () => import('../pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
		title: 'Basic | shopping-cart'
	},
	{
		path: '**',
		redirectTo: ''
	}
];
