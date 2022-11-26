import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes/app.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MotherboardsComponent } from './modules/motherboards/motherboards.component';
import { SoundDevicesComponent } from './modules/sound-devices/sound-devices.component';
import { ShipEquipmentComponent } from './modules/ship-equipment/ship-equipment.component';
import { SoftwareComponent } from './modules/software/software.component';
import { SidebarComponent } from '../common/ui/sidebar/sidebar.component';
import { MainComponent } from './modules/main/main.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MotherboardsComponent,
    SoundDevicesComponent,
    ShipEquipmentComponent,
    SoftwareComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
