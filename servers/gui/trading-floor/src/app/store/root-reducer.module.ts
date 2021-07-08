import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DashboardState, reducer} from '@store/dashboard/reducer';

export enum StoreModules {
	Dashboard = 'dashboard',
}

export interface AppState {
	dashboard: DashboardState;
}

const APP_REDUCERS = {
	dashboard: reducer,
};

@NgModule({
	imports: [StoreModule.forRoot(APP_REDUCERS), StoreDevtoolsModule.instrument()],
})
export class RootReducerModule {}
