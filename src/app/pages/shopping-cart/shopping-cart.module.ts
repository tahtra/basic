import {A11yModule} from '@angular/cdk/a11y';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {shoppingCartRoute} from '../../routes/shopping-cart.route';
import {ShoppingCartComponent} from './component/shopping-cart.component';


@NgModule({
	declarations: [
		ShoppingCartComponent
	],
	imports: [
		RouterModule.forChild(shoppingCartRoute),

		CommonModule,
		MatExpansionModule,
		MatButtonModule,
		MatIconModule,
		MatDividerModule,
		MatTooltipModule
	]
})
export class ShoppingCartModule {
}
