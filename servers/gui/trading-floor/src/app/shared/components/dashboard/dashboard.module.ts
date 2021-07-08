import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from '@shared/components/dashboard/dashboard.component';
import {DashboardContainer} from '@shared/components/dashboard/dashboard.container';

@NgModule({
	declarations: [DashboardComponent, DashboardContainer],
	imports: [CommonModule],
	exports: [DashboardContainer],
})
export class DashboardModule {}
