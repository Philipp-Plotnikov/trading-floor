import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopNavigationPanelModule} from '@shared/components/top-navigation-panel/top-navigation-panel.module';
import {FooterModule} from '@shared/components/footer/footer.module';
import {RootReducerModule} from '@store/root-reducer.module';
import {RootEffectsModule} from '@store/root-effects.module';
import {ApiService} from '@api/common.api.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({appId: 'serverApp'}),
		BrowserAnimationsModule,
		AppRoutingModule,
		TopNavigationPanelModule,
		FooterModule,
		RootReducerModule,
		RootEffectsModule,
	],
	providers: [ApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
