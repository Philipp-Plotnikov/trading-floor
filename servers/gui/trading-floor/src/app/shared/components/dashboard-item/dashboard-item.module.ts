import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardItemComponent} from './dashboard-item.component';
import {DashboardItemContainer} from '@shared/components/dashboard-item/dashboard-item.container';

@NgModule({
	declarations: [DashboardItemComponent, DashboardItemContainer],
	imports: [CommonModule],
	exports: [DashboardItemContainer],
})
export class DashboardItemModule {}
