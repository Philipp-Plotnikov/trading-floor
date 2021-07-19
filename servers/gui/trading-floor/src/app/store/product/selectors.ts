import {IStore} from '@entities/store/store.interaces';
import {createSelector} from '@ngrx/store';
import {ProductFields} from '@store/product/reducer';
import {get} from 'lodash-es';

const getState = (state: IStore.AppState) => state.product;

const getProductData = createSelector(getState, (state) => get(state, ProductFields.ProductData));
const getProductDataLoadingStatus = createSelector(getState, (state) =>
	get(state, ProductFields.ProductDataLoadingStatus)
);

export const productSelectors = {
	productData: getProductData,
	productDataLoadingStatus: getProductDataLoadingStatus,
};
