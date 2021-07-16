import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from '@shared/components/dashboard/dashboard.component';
import {DashboardContainer} from '@shared/components/dashboard/dashboard.container';
import {DashboardItemModule} from '@shared/components/dashboard/item/dashboard-item.module';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [DashboardComponent, DashboardContainer],
	imports: [CommonModule, DashboardItemModule, RouterModule],
	exports: [DashboardContainer],
})
export class DashboardModule {}
