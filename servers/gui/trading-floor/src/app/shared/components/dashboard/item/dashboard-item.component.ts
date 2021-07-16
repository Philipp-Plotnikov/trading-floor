import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'dashboard-item-component',
	templateUrl: './dashboard-item.component.html',
	styleUrls: ['./dashboard-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemComponent {
	@Input() public readonly title: string;
	@Input() public readonly imgUrl: string;
}
