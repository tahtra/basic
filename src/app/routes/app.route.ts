import {Routes} from '@angular/router';
import {MotherboardsComponent} from '../modules/motherboards/motherboards.component';
import {ShipEquipmentComponent} from '../modules/ship-equipment/ship-equipment.component';
import {SoftwareComponent} from '../modules/software/software.component';
import {SoundDevicesComponent} from '../modules/sound-devices/sound-devices.component';
import {MainComponent} from '../modules/main/main.component';

export const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'motherboards',
    component: MotherboardsComponent
  },
  {
    path: 'sound-devices',
    component: SoundDevicesComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: 'ship-equipment',
    component: ShipEquipmentComponent
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
]
