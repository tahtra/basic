import {A11yModule} from '@angular/cdk/a11y';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '../common/ui/header/header.component';
import {SidebarComponent} from '../common/ui/sidebar/sidebar.component';
import {AppComponent} from './app.component';
import {appRoutes} from './routes/app.route';


@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		RouterModule.forRoot(appRoutes, {useHash: true}),
		CommonModule,
		HeaderComponent,
		MatDialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
