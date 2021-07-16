import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'dashboard-item',
	template: ' <dashboard-item-component [title]="title" [imgUrl]="imgUrl"></dashboard-item-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemContainer {
	@Input() public readonly title: string;
	@Input() public readonly imgUrl: string;
}
