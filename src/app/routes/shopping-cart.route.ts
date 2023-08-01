import {Routes} from '@angular/router';
import {ShoppingCartComponent} from '../pages/shopping-cart/component/shopping-cart.component';
import {SoundDevicesComponent} from '../pages/sound-devices/component/sound-devices.component';


export const shoppingCartRoute: Routes = [
	{
		path: '',
		component: ShoppingCartComponent
	}
];
