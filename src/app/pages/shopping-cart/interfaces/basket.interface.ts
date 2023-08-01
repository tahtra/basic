import {FormFactorInterface} from '@interfaces';


export interface BasketInterface {
	motherboard: FormFactorInterface,
	interfaces: {[key: string]: number | boolean},
	count: number | null
}