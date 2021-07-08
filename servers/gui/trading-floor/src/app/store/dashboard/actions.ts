import {StoreModules} from '@store/root-reducer.module';
import {StoreHelper} from '@shared/helpers/store.helper';
import {DashboardFields} from '@store/dashboard/reducer';
import {createAction, props} from '@ngrx/store';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {CustomError} from '@entities/common/common.interfaces';

const moduleName = StoreModules.Dashboard;
const moduleDataLoadingActionNameCreator = StoreHelper.getModuleDataLoadingActionNameSetCreator(moduleName);

const TYPES = {
	[DashboardFields.Categories]: moduleDataLoadingActionNameCreator('Categories'),
};

export const DashboardActions = {
	types: TYPES,
	loadCategoriesRequested: createAction(TYPES[DashboardFields.Categories].REQUESTED),
	loadCategoriesSucceeded: createAction(
		TYPES[DashboardFields.Categories].SUCCEEDED,
		props<{payload: IDashboard.CategoryData[]}>()
	),
	loadCategoriesFailed: createAction(TYPES[DashboardFields.Categories].FAILED, props<{payload: CustomError}>()),
};
