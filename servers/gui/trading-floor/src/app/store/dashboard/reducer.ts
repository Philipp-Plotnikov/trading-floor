import {Action, createReducer} from '@ngrx/store';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {LoadingStatus} from '@entities/common/common.interfaces';
import {status} from '@entities/common/common.constants';

export enum DashboardFields {
	Categories = 'categories',
	CategoriesLoadingStatus = 'categoriesLoadingStatus',
}

export interface DashboardState {
	[DashboardFields.Categories]: IDashboard.CategoryData[];
	[DashboardFields.CategoriesLoadingStatus]: LoadingStatus;
}

const initialDashboardState = {
	[DashboardFields.Categories]: [],
	[DashboardFields.CategoriesLoadingStatus]: status.default,
};

const dashboardReducer = createReducer(initialDashboardState);

export function reducer(state: undefined | DashboardState, action: Action): DashboardState {
	return dashboardReducer(state, action);
}
