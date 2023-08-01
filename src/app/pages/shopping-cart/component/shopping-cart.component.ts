import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {InterfacesList} from '../../../../common/constants';
import {InterfacesInterface} from '../../../../common/interfaces';
import {ShoppingCartService} from '../shopping-cart.service';


@Component({
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
	interfacesList: InterfacesInterface[] = InterfacesList;

	constructor(
		public shoppingCartService: ShoppingCartService,
		private router: Router
	) {
		if (this.shoppingCartService.basket.length === 0) this.router.navigateByUrl(`/motherboards/new`).then();

		console.log(this.shoppingCartService.basket);
	}
}
