import {Action, createReducer, on} from '@ngrx/store';
import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';
import {GoodsActions} from '@store/goods/actions';
import {StoreHelper} from '@shared/helpers/store.helper';
import {LoadingStatus} from '@entities/common/common.interfaces';
import {status} from '@entities/common/common.constants';
import {flow} from 'lodash-es';

export enum GoodsFields {
	CatalogData = 'catalogData',
	CatalogDataLoadingStatus = 'catalogDataLoadingStatus',
}

export interface GoodsState {
	[GoodsFields.CatalogData]: ICatalog.CatalogData[];
	[GoodsFields.CatalogDataLoadingStatus]: LoadingStatus;
}

const initialGoodsState = {
	[GoodsFields.CatalogData]: null,
	[GoodsFields.CatalogDataLoadingStatus]: status.default,
};

const reducer = createReducer<GoodsState>(
	initialGoodsState,
	on(GoodsActions.loadCatalogDataRequested, (state) => {
		console.log('Reducer');
		return StoreHelper.set(GoodsFields.CatalogDataLoadingStatus, status.loading, state) as GoodsState;
	}),
	on(
		GoodsActions.loadCatalogDataSucceeded,
		(state, {payload}) =>
			flow([
				StoreHelper.set(GoodsFields.CatalogDataLoadingStatus, status.loaded),
				StoreHelper.set(GoodsFields.CatalogData, payload),
			])(state) as GoodsState
	),
	on(
		GoodsActions.loadCatalogDataFailed,
		(state, {payload}) =>
			StoreHelper.set(
				GoodsFields.CatalogDataLoadingStatus,
				status.error(payload.errorMessage),
				state
			) as GoodsState
	)
);

export function goodsReducer(state: undefined | GoodsState, action: Action): GoodsState {
	return reducer(state, action);
}
