import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';


@Component({
	selector: 'dialog-animations-example-dialog',
	standalone: true,
	imports: [
		MatDialogModule,
		MatButtonModule
	],
	template: `
		<h1 mat-dialog-title>Удаление</h1>
		<div mat-dialog-content>
			Вы уверены, что хотите удалить?
		</div>
		<div mat-dialog-actions>
			<button mat-button [mat-dialog-close]="false">нет</button>
			<button mat-button color="warn" [mat-dialog-close]="true" cdkFocusInitial>Да</button>
		</div>`
})
export class ConfirmDialogComponent {
	constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}
}