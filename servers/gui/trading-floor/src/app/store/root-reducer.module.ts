import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from '@store/dashboard/reducer';

const APP_REDUCERS = {
	dashboard: reducer,
};

@NgModule({
	imports: [StoreModule.forRoot(APP_REDUCERS), StoreDevtoolsModule.instrument()],
})
export class RootReducerModule {}
