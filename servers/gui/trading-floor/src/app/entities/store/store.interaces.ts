import {DashboardState} from '@store/dashboard/reducer';

export namespace IStore {
	export interface AppState {
		dashboard: DashboardState;
	}
}
