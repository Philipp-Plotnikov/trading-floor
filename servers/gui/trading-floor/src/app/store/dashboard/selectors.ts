import {createSelector} from '@ngrx/store';
import {DashboardFields} from '@store/dashboard/reducer';
import {get} from 'lodash-es';
import {IStore} from '@entities/store/store.interaces';

const getState = (state: IStore.AppState) => state.dashboard;

const getCategoryData = createSelector(getState, (state) => get(state, DashboardFields.CategoryData));
const getCategoryDataLoadingStatus = createSelector(getState, (state) =>
	get(state, DashboardFields.CategoryDataLoadingStatus)
);

export const dashboardSelectors = {
	categoryData: getCategoryData,
	categoryDataLoadingStatus: getCategoryDataLoadingStatus,
};
