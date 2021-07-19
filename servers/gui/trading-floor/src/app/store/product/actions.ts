import {EStore} from '@entities/store/store.enums';
import {StoreHelper} from '@shared/helpers/store.helper';
import {createAction, props} from '@ngrx/store';
import {CustomError} from '@entities/common/common.interfaces';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';

const moduleName = EStore.Modules.Product;
const moduleDataLoadingActionNameCreator = StoreHelper.getModuleDataLoadingActionNameSetCreator(moduleName);

const TYPES = {
	LOAD_PRODUCT_DATA: moduleDataLoadingActionNameCreator('Load product data'),
};

export const ProductActions = {
	types: TYPES,
	loadProductDataRequested: createAction(TYPES.LOAD_PRODUCT_DATA.REQUESTED),
	loadProductDataSucceeded: createAction(
		TYPES.LOAD_PRODUCT_DATA.SUCCEEDED,
		props<{payload: IProductCard.ProductData}>()
	),
	loadProductDataFailed: createAction(TYPES.LOAD_PRODUCT_DATA.FAILED, props<{payload: CustomError}>()),
};
