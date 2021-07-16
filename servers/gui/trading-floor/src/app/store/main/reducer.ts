import {Action, createReducer, on} from '@ngrx/store';
import {MainActions} from '@store/main/actions';
import {StoreHelper} from '@shared/helpers/store.helper';
import {status} from '@entities/common/common.constants';
import {flow} from 'lodash-es';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {LoadingStatus} from '@entities/common/common.interfaces';

// FIELDS
export enum DashboardFields {
	CategoryData = 'categoryData',
	CategoryDataLoadingStatus = 'categoryDataLoadingStatus',
}
export enum MainFields {
	Dashboard = 'dashboard',
}

// STATES
interface DashboardState {
	[DashboardFields.CategoryData]: IDashboard.CategoryData[];
	[DashboardFields.CategoryDataLoadingStatus]: LoadingStatus;
}
export interface MainState {
	[MainFields.Dashboard]: DashboardState;
}

// INITIAL STATES
export const initialMainState = {
	[MainFields.Dashboard]: null,
};

// REDUCERS
const dashboardReducer = createReducer<MainState>(
	initialMainState,
	on(
		MainActions.loadCategoriesRequested,
		(state) =>
			StoreHelper.set(
				[MainFields.Dashboard, DashboardFields.CategoryDataLoadingStatus],
				status.loading,
				state
			) as MainState
	),
	on(
		MainActions.loadCategoriesSucceeded,
		(state, {payload}) =>
			flow([
				StoreHelper.set([MainFields.Dashboard, DashboardFields.CategoryDataLoadingStatus], status.loaded),
				StoreHelper.set([MainFields.Dashboard, DashboardFields.CategoryData], payload),
			])(state) as MainState
	),
	on(
		MainActions.loadCategoriesFailed,
		(state, {payload}) =>
			StoreHelper.set(
				[MainFields.Dashboard, DashboardFields.CategoryDataLoadingStatus],
				status.error(payload.errorMessage),
				state
			) as MainState
	)
);
const reducer = createReducer<MainState>(
	initialMainState,
	on(
		MainActions.loadCategoriesRequested,
		MainActions.loadCategoriesSucceeded,
		MainActions.loadCategoriesFailed,
		dashboardReducer
	)
);

export function mainReducer(state: undefined | MainState, action: Action): MainState {
	return reducer(state, action);
}
