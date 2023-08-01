import {InterfacesInterface} from '../interfaces/interfaces.interface';


export class InterfacesModel {
	name!: string;
	title!: string;
	max!: number | null;
	checked: boolean = false;

	constructor(elem: InterfacesInterface) {
		this.name = elem.title.toLowerCase().replace(/\s/g, '_').replace(/,/g, '');
		this.title = elem.title;
		this.max = elem.max;
	}
}
