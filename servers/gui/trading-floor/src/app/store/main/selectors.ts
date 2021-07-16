import {createSelector} from '@ngrx/store';
import {get} from 'lodash-es';
import {IStore} from '@entities/store/store.interaces';
import {DashboardFields, MainFields} from '@store/main/reducer';

const getState = (state: IStore.AppState) => state.main;

const getDashboard = createSelector(getState, (state) => get(state, MainFields.Dashboard));

const getCategoryData = createSelector(getDashboard, (state) => get(state, DashboardFields.CategoryData));
const getCategoryDataLoadingStatus = createSelector(getDashboard, (state) =>
	get(state, DashboardFields.CategoryDataLoadingStatus)
);

export const mainSelectors = {
	categoryData: getCategoryData,
	categoryDataLoadingStatus: getCategoryDataLoadingStatus,
};
