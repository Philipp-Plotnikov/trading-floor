import {IStore} from '@entities/store/store.interaces';
import {createSelector} from '@ngrx/store';
import {get} from 'lodash-es';
import {GoodsFields} from '@store/goods/reducer';

const getState = (state: IStore.AppState) => state.goods;

const getCatalogData = createSelector(getState, (state) => get(state, GoodsFields.CatalogData));
const getCatalogDataLoadingStatus = createSelector(getState, (state) =>
	get(state, GoodsFields.CatalogDataLoadingStatus)
);

export const goodsSelectors = {
	catalogData: getCatalogData,
	catalogDataLoadingStatus: getCatalogDataLoadingStatus,
};
