import {Action} from '@ngrx/store';

export namespace IEffects {
	export interface ActionWithPayload<T = any> extends Action {
		payload?: T;
	}
}
