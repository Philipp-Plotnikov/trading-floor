import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {mainReducer} from '@store/main/reducer';
import {goodsReducer} from '@store/goods/reducer';

const APP_REDUCERS = {
	main: mainReducer,
	goods: goodsReducer,
	router: routerReducer,
};

@NgModule({
	imports: [
		StoreModule.forRoot(APP_REDUCERS),
		StoreRouterConnectingModule.forRoot(),
		StoreDevtoolsModule.instrument(),
	],
})
export class RootReducerModule {}
