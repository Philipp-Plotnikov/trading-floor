import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopNavigationPanelModule} from '@shared/components/top-navigation-panel/top-navigation-panel.module';
import {FooterModule} from '@shared/components/footer/footer.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, TopNavigationPanelModule, FooterModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
