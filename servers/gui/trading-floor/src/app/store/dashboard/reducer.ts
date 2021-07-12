import {Action, createReducer, on} from '@ngrx/store';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {LoadingStatus} from '@entities/common/common.interfaces';
import {status} from '@entities/common/common.constants';
import {DashboardActions} from '@store/dashboard/actions';
import {clone, flow, set} from 'lodash-es';
import {StoreHelper} from '@shared/helpers/store.helper';

export enum DashboardFields {
	CategoryData = 'categoryData',
	CategoryDataLoadingStatus = 'categoryDataLoadingStatus',
}

export interface DashboardState {
	[DashboardFields.CategoryData]: IDashboard.CategoryData[];
	[DashboardFields.CategoryDataLoadingStatus]: LoadingStatus;
}

const initialDashboardState = {
	[DashboardFields.CategoryData]: [],
	[DashboardFields.CategoryDataLoadingStatus]: status.default,
};

const dashboardReducer = createReducer<DashboardState>(
	initialDashboardState,

	// CATEGORY DATA
	on(
		DashboardActions.loadCategoriesSucceeded,
		(state) => StoreHelper.set(DashboardFields.CategoryDataLoadingStatus, status.loading, state) as DashboardState
	),
	on(
		DashboardActions.loadCategoriesSucceeded,
		(state, {payload}) =>
			flow([
				StoreHelper.set(DashboardFields.CategoryDataLoadingStatus, status.loaded),
				StoreHelper.set(DashboardFields.CategoryData, payload),
			])(state) as DashboardState
	),
	on(
		DashboardActions.loadCategoriesFailed,
		(state, {payload}) =>
			StoreHelper.set(
				DashboardFields.CategoryDataLoadingStatus,
				status.error(payload.errorMessage),
				state
			) as DashboardState
	)
);

export function reducer(state: undefined | DashboardState, action: Action): DashboardState {
	return dashboardReducer(state, action);
}
