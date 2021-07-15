import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardItemComponent} from './dashboard-item.component';
import {DashboardItemContainer} from '@shared/components/dashboard/item/dashboard-item.container';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [DashboardItemComponent, DashboardItemContainer],
	imports: [CommonModule, RouterModule],
	exports: [DashboardItemContainer],
})
export class DashboardItemModule {}
