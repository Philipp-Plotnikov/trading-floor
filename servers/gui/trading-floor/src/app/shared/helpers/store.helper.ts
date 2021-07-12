import {IStoreHelper} from '@entities/shared/helpers/store/store.interfaces';
import {clone, set} from 'lodash-es';
import {PureObject} from '@entities/common/common.interfaces';

export class StoreHelper {
	public static getModuleActionNameCreator(moduleName: string): IStoreHelper.ModuleActionNameCreator {
		return (eventName: string): string => `[${moduleName}] ${eventName}`;
	}

	public static getModuleDataLoadingActionNameSetCreator(
		moduleName: string
	): IStoreHelper.ModuleDataLoadingActionNameSetCreator {
		return (eventName: string): IStoreHelper.ModuleDataLoadingActionNameSet => ({
			FAILED: `[${moduleName}] ${eventName} failed`,
			REQUESTED: `[${moduleName}] ${eventName} requested`,
			SUCCEEDED: `[${moduleName}] ${eventName} succeeded`,
		});
	}

	public static set<T extends PureObject>(key: string, value: unknown, object?: T): T | ((state: T) => T) {
		if (!object) {
			return (state: T) => set(clone(state), key, value);
		}
		return set(clone(object), key, value);
	}
}
