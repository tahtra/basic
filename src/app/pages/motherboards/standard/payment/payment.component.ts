import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../../shopping-cart/shopping-cart.service';


@Component({
	templateUrl: './payment.component.html'
})
export class PaymentComponent {
	constructor(
		public shoppingCartService: ShoppingCartService,
		private router: Router
	) {
		if (this.shoppingCartService.basket.length === 0) this.router.navigateByUrl(`/motherboards/new`).then();
	}
}
