import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'dashboard',
	template: ' <dashboard-component></dashboard-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainer {}
