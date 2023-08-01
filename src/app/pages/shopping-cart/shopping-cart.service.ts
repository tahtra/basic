import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './dialogs/confirm.dialog.component';
import {BasketInterface} from './interfaces/basket.interface';


@Injectable({providedIn: 'root'})
export class ShoppingCartService {
	public basket: BasketInterface[] = [];

	constructor(public dialog: MatDialog) {
		console.log('ShoppingCartService constructor')
	}

	public addToBasket(data: BasketInterface, index?: number) {
		if (index !== undefined) {
			this.basket[index] = data;
		} else {
			this.basket.push(data);
		}
	}

	public clearBacket() {
		const dialogRef = this.openDialog();

		dialogRef.afterClosed().subscribe(answer => {
			if (!!answer) this.basket = [];
		});
	}

	public deleteElement(number: number) {
		const dialogRef = this.openDialog();

		dialogRef.afterClosed().subscribe(answer => {
			if (!!answer) this.basket.splice(number, 1);
		});
	}

	private openDialog() {
		return this.dialog.open(ConfirmDialogComponent, {width: '250px'});
	}
}
