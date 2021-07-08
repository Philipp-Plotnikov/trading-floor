import {IStoreHelper} from '@entities/shared/helpers/store/store.interfaces';
import {Observable, of, OperatorFunction} from 'rxjs';
import {IEffects} from '@entities/shared/helpers/effects/effects.interfaces';
import {catchError, map} from 'rxjs/operators';

export class EffectsHelper {
	private static mapDataLoadingActionOnSuccess<T1, T2 extends IEffects.ActionWithPayload>(
		moduleDataLoadingActionNameSet: IStoreHelper.ModuleDataLoadingActionNameSet,
		isPayloadRequired: boolean
	): OperatorFunction<T1, T2> {
		return map<T1, T2>((payload): T2 => {
			const nextAction = {type: moduleDataLoadingActionNameSet.SUCCEEDED} as T2;

			if (isPayloadRequired) {
				if (payload === undefined || payload === null) {
					return {
						type: moduleDataLoadingActionNameSet.FAILED,
						payload: 'API Error Occurred: payload is undefined or null',
					} as T2;
				}

				nextAction.payload = payload;
			}

			return nextAction;
		});
	}

	private static mapDataLoadingActionOnFailed<T1 extends IEffects.ActionWithPayload>(
		moduleDataLoadingActionNameSet: IStoreHelper.ModuleDataLoadingActionNameSet
	): OperatorFunction<T1, T1> {
		return catchError<T1, Observable<T1>>(
			(error: Error): Observable<T1> =>
				of<T1>({
					type: moduleDataLoadingActionNameSet.FAILED,
					payload: error.message,
				} as T1)
		);
	}

	public static mapDataLoadingAction<T1, T2 extends IEffects.ActionWithPayload>(
		moduleDataLoadingActionNameSet: IStoreHelper.ModuleDataLoadingActionNameSet,
		isPayloadRequired = true
	): OperatorFunction<T1, T2> {
		return (source: Observable<T1>): Observable<T2> =>
			source.pipe(
				EffectsHelper.mapDataLoadingActionOnSuccess<T1, T2>(moduleDataLoadingActionNameSet, isPayloadRequired),
				EffectsHelper.mapDataLoadingActionOnFailed<T2>(moduleDataLoadingActionNameSet)
			);
	}
}
