import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'dashboard-item',
	template: ' <dashboard-item-component></dashboard-item-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemContainer {}
