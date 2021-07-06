import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationPanelComponent} from './top-navigation-panel.component';
import {TopNavigationPanelContainer} from '@shared/components/top-navigation-panel/top-navigation-panel.container';
import {GlobalSearchInputModule} from '@shared/components/global-search-input/global-search-input.module';

@NgModule({
	declarations: [TopNavigationPanelComponent, TopNavigationPanelContainer],
	imports: [CommonModule, GlobalSearchInputModule],
	exports: [TopNavigationPanelContainer],
})
export class TopNavigationPanelModule {}
