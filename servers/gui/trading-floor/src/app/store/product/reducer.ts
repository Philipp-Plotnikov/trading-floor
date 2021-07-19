import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LoadingStatus} from '@entities/common/common.interfaces';
import {status} from '@entities/common/common.constants';
import {Action, createReducer, on} from '@ngrx/store';
import {ProductActions} from '@store/product/actions';
import {StoreHelper} from '@shared/helpers/store.helper';
import {flow} from 'lodash-es';

export enum ProductFields {
	ProductData = 'productData',
	ProductDataLoadingStatus = 'productDataLoadingStatus',
}

export interface ProductState {
	[ProductFields.ProductData]: IProductCard.ProductData;
	[ProductFields.ProductDataLoadingStatus]: LoadingStatus;
}

const initialProductState = {
	[ProductFields.ProductData]: null,
	[ProductFields.ProductDataLoadingStatus]: status.default,
};

const reducer = createReducer<ProductState>(
	initialProductState,
	on(
		ProductActions.loadProductDataRequested,
		(state) => StoreHelper.set(ProductFields.ProductDataLoadingStatus, status.loading, state) as ProductState
	),
	on(
		ProductActions.loadProductDataSucceeded,
		(state, {payload}) =>
			flow([
				StoreHelper.set(ProductFields.ProductDataLoadingStatus, status.loaded),
				StoreHelper.set(ProductFields.ProductData, payload),
			])(state) as ProductState
	),
	on(
		ProductActions.loadProductDataFailed,
		(state, {payload}) =>
			StoreHelper.set(
				ProductFields.ProductDataLoadingStatus,
				status.error(payload.errorMessage),
				state
			) as ProductState
	)
);

export function productReducer(state: ProductState | undefined, action: Action): ProductState {
	return reducer(state, action);
}
