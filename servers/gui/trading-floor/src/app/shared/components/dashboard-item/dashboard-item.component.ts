import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'dashboard-item-component',
	templateUrl: './dashboard-item.component.html',
	styleUrls: ['./dashboard-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemComponent {}
