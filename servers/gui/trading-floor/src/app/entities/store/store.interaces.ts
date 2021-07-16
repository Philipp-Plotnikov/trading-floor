import {RouterState} from '@store/router/reducer';
import {MainState} from '@store/main/reducer';
import {GoodsState} from '@store/goods/reducer';

export namespace IStore {
	export interface AppState {
		main: MainState;
		goods: GoodsState;
		product;
		cart;
		router: RouterState;
	}
}
