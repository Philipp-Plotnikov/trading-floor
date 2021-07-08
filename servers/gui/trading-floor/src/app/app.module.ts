import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopNavigationPanelModule} from '@shared/components/top-navigation-panel/top-navigation-panel.module';
import {FooterModule} from '@shared/components/footer/footer.module';
import {RootReducerModule} from '@store/root-reducer.module';
import {RootEffectsModule} from '@store/root-effects.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		TopNavigationPanelModule,
		FooterModule,
		RootReducerModule,
		RootEffectsModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
