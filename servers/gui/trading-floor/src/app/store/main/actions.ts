import {EStore} from '@entities/store/store.enums';
import {createAction, props} from '@ngrx/store';
import {IDashboard} from '@entities/shared/components/dashboard/dashboard.interfaces';
import {CustomError} from '@entities/common/common.interfaces';
import {StoreHelper} from '@shared/helpers/store.helper';

const moduleName = EStore.Modules.Main;
const moduleDataLoadingActionNameCreator = StoreHelper.getModuleDataLoadingActionNameSetCreator(moduleName);

const TYPES = {
	LOAD_CATEGORY_DATA: moduleDataLoadingActionNameCreator('Load category data'),
};

export const MainActions = {
	types: TYPES,
	loadCategoriesRequested: createAction(TYPES.LOAD_CATEGORY_DATA.REQUESTED),
	loadCategoriesSucceeded: createAction(
		TYPES.LOAD_CATEGORY_DATA.SUCCEEDED,
		props<{payload: IDashboard.CategoryData[]}>()
	),
	loadCategoriesFailed: createAction(TYPES.LOAD_CATEGORY_DATA.FAILED, props<{payload: CustomError}>()),
};
