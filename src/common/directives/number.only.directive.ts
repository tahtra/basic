import {Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
	selector: '[number-only]',
	standalone: true
})
export class NumberOnlyDirective {
	@Input('number-only') onlyNumber?: 'integer' | 'decimal' = 'integer';

	decimalSymbol = ['.', ','];

	constructor(private elementRef: ElementRef) {}

	@HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
		let e = event;

		if ((this.isDecilal() && this.decimalSymbol.includes(e.key)) ||
			// Allow: Ctrl+A
			(e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
			// Allow: Backspace
			(e.keyCode === 8) ||
			// Allow: Delete
			(e.keyCode === 46) ||
			// Allow: Ctrl+C
			(e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
			// Allow: Ctrl+V
			(e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
			// Allow: Ctrl+X
			(e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
			// Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
			// let it happen, don't do anything
			return;
		}

		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	}

	@HostListener('input', ['$event']) onInput(event: any) {
		const value = (event?.target?.value).toString()
			.replace(',', '.')
			.replace(this.isDecilal() ? /[^\d.]/g : /[^\d]/g, '')
			.split('.')
			.filter((elem: any, i: number) => i <= 1);

		value[0] = value[0].replace(/[^\d]/g, '');
		if (value.length > 1) {
			value[1] = value[1].replace(/[^\d]/g, '').substring(0, 2);
		}
		this.elementRef.nativeElement.value = value[0] !== '' ? value.join('.') : value[0];
	}

	private isDecilal(): boolean {
		return this.onlyNumber === 'decimal';
	}
}
