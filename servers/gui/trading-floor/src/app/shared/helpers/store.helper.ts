import {IStoreHelper} from '@entities/shared/helpers/store/store.interfaces';

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
}
