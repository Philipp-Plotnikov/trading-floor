import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardItemComponent} from './dashboard-item.component';
import {DashboardItemContainer} from '@shared/components/dashboard/item/dashboard-item.container';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	declarations: [DashboardItemComponent, DashboardItemContainer],
	imports: [CommonModule, MatCardModule],
	exports: [DashboardItemContainer],
})
export class DashboardItemModule {}
