import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {dashboardSelectors} from '@store/dashboard/selectors';
import {DashboardActions} from '@store/dashboard/actions';
import {LoadingStatus} from '@entities/common/common.interfaces';

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
	readonly categoryData$: Observable<IDashboard.CategoryData[]>;
	readonly categoryDataLoadingStatus$: Observable<LoadingStatus>;

	constructor(private store: Store) {
		this.initActions();
		this.categoryData$ = this.store.select(dashboardSelectors.categoryData);
		this.categoryDataLoadingStatus$ = this.store.select(dashboardSelectors.categoryDataLoadingStatus);
	}

	private initActions(): void {
		this.store.dispatch(DashboardActions.loadCategoriesRequested());
	}
}
