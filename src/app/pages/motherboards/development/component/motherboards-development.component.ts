import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/cdk/stepper';
import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormFactorList, InterfacesList} from '@constants';

import {FormFactorInterface, InterfacesInterface} from '@interfaces';
import {map, Observable} from 'rxjs';


@Component({
	templateUrl: './motherboards-development.component.html',
	styleUrls: ['./motherboards-development.component.scss']
})
export class MotherboardsDevelopmentComponent {
	motherboardsList: FormFactorInterface[] = FormFactorList;
	interfacesList: InterfacesInterface[] = InterfacesList;
	stepperOrientation: Observable<StepperOrientation>;

	selectedMotherboard: FormGroup = new FormGroup<any>({
		title: new FormControl(FormFactorList[0].title),
		height: new FormControl(FormFactorList[0].height, [Validators.required, Validators.min(1)]),
		width: new FormControl(FormFactorList[0].width, [Validators.required, Validators.min(1)])
	});
	MULTIPLIER_PX_IN_MM: number = 3.794;

	selectedInterfaces: FormGroup = new FormGroup({});
	selectedInterfacesList: any = [];

	countMotherboard: FormControl<number | null> = new FormControl(1, [Validators.required, Validators.min(1)]);

	// editableIndex?: number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private router: Router,
		private activateRoute: ActivatedRoute,
		private breakpointObserver: BreakpointObserver
	) {
		this.stepperOrientation = breakpointObserver
			.observe('(min-width: 768px)')
			.pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

		this.selectedMotherboard.valueChanges.subscribe(({title}) => {
			if (title === 'CUSTOM') {
				this.selectedMotherboard.get('height')?.enable({emitEvent: false});
				this.selectedMotherboard.get('width')?.enable({emitEvent: false});
			} else {
				this.selectedMotherboard.get('height')?.disable({emitEvent: false});
				this.selectedMotherboard.get('width')?.disable({emitEvent: false});
			}
		});

		this.interfacesList.forEach(elem => {
			this.selectedInterfaces.addControl(elem.name, new FormControl(0));
		});

		// this.editableIndex = activateRoute.snapshot.params['id'];
		// if (!this.editableIndex) return;
		// const editableValue = this.shoppingCartService.basket?.[this.editableIndex]
		// if (!editableValue) {
		// 	this.router.navigateByUrl('/motherboards/new').then();
		// } else {
		// 	this.changeFormFactor(editableValue.motherboard);
		// 	this.selectedInterfaces.patchValue(editableValue.interfaces);
		// 	this.countMotherboard.setValue(editableValue.count);
		// }

		this.selectedInterfaces.valueChanges.subscribe((_) => {
			this.selectedInterfacesList = this.getActionInterfaceList();
		})
	}

	changeFormFactor(item: FormFactorInterface): void {
		this.selectedMotherboard.setValue(item);
	}

	getTitleFromName(name: string): string {
		return this.interfacesList.find(elem => elem.name === name)?.title || '';
	}

	getActionInterfaceList() {
		const interfaces = this.selectedInterfaces.getRawValue();
		const interfaceList = [];
		for (const interfacesKey in interfaces) {
			if (!interfaces[interfacesKey]) {
				delete interfaces[interfacesKey];
			} else {
				interfaceList.push({
					name: interfacesKey,
					title: this.getTitleFromName(interfacesKey),
					value: interfaces[interfacesKey]
				});
			}

		}
		return interfaceList;
	}

	addToBasket() {
		if (this.selectedMotherboard.invalid || this.selectedInterfaces.invalid || this.countMotherboard.invalid) return;

		// this.shoppingCartService.addToBasket(globalData, this.editableIndex);

		// this.router.navigateByUrl('/motherboards/shopping-cart').then();
		console.log(
			this.selectedMotherboard.getRawValue(),
			this.getActionInterfaceList(),
			this.countMotherboard.getRawValue()
		);
	}

	drop(event: any) {
		console.log(event);
	}
}
