import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {LoadingStatus} from '@entities/common/common.interfaces';
import {mainSelectors} from '@store/main/selectors';

@Component({
	selector: 'dashboard',
	template: `
		<dashboard-component
			[categoryData]="categoryData$ | async"
			[categoryDataLoadingStatus]="categoryDataLoadingStatus$ | async"
		></dashboard-component>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainer {
	public readonly categoryData$: Observable<IDashboard.CategoryData[]>;
	public readonly categoryDataLoadingStatus$: Observable<LoadingStatus>;

	constructor(private store: Store) {
		this.categoryData$ = this.store.select(mainSelectors.categoryData);
		this.categoryDataLoadingStatus$ = this.store.select(mainSelectors.categoryDataLoadingStatus);
	}
}
