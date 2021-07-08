export namespace IStoreHelper {
	export type ModuleActionNameCreator = (eventName: string) => string;

	export interface ModuleDataLoadingActionNameSet {
		FAILED: string;
		REQUESTED: string;
		SUCCEEDED: string;
	}

	export type ModuleDataLoadingActionNameSetCreator = (eventName: string) => ModuleDataLoadingActionNameSet;
}
