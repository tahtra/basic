import {Routes} from '@angular/router';


export const appRoutes: Routes = [
	{
		path: 'main',
		loadChildren: () => import('../pages/main/main.module').then(m => m.MainModule),
		title: 'Basic'
	},
	{
		path: 'motherboards',
		loadChildren: () => import('../pages/motherboards/motherboards.module').then(m => m.MotherboardsModule),
		title: 'Motherboards'
	},
	{
		path: 'sound-devices',
		loadChildren: () => import('../pages/sound-devices/sound-devices.module').then(m => m.SoundDevicesModule),
		title: 'Sound-devices'
	},
	{
		path: 'software',
		loadChildren: () => import('../pages/software/software.module').then(m => m.SoftwareModule),
		title: 'Software'
	},
	{
		path: 'ship-equipment',
		loadChildren: () => import('../pages/ship-equipment/ship-equipment.module').then(m => m.ShipEquipmentModule),
		title: 'Ship-equipment'
	},
	{
		path: '**',
		redirectTo: 'main'
	}
];
