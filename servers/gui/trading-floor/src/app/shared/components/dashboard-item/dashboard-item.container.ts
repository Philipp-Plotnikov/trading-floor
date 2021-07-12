import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'dashboard-item',
	template: ' <dashboard-item-component [title]="title" [imgUrl]="imgUrl"></dashboard-item-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemContainer {
	@Input() readonly title: string;
	@Input() readonly imgUrl: string;
}
