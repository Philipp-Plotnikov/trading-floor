import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationPanelComponent} from './top-navigation-panel.component';
import {TopNavigationPanelContainer} from '@shared/components/top-navigation-panel/top-navigation-panel.container';
import {GlobalSearchInputModule} from '@shared/components/global-search-input/global-search-input.module';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [TopNavigationPanelComponent, TopNavigationPanelContainer],
	imports: [CommonModule, GlobalSearchInputModule, MatIconModule, RouterModule],
	exports: [TopNavigationPanelContainer],
})
export class TopNavigationPanelModule {}
