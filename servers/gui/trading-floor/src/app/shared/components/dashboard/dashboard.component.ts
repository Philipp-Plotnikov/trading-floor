import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {LoadingStatus} from '@entities/common/common.interfaces';

@Component({
	selector: 'dashboard-component',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
	@Input() readonly categoryData: IDashboard.CategoryData[];
	@Input() readonly categoryDataLoadingStatus: LoadingStatus;
}
