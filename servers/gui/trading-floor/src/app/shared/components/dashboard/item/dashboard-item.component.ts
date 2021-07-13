import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'dashboard-item-component',
	templateUrl: './dashboard-item.component.html',
	styleUrls: ['./dashboard-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemComponent {
	@Input() readonly title: string;
	@Input() readonly imgUrl: string;
}
