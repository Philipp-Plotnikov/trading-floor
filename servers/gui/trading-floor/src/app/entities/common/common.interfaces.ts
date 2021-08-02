import {LocalStorageEvents} from '@entities/common/common.enums';

export type LoadingStatus =
	| {loading: false; loaded: false; error: null}
	| {loading: true; loaded: false; error: null}
	| {loading: false; loaded: true; error: null}
	| {loading: false; loaded: false; error: string};

export interface Statuses {
	default: LoadingStatus;
	loading: LoadingStatus;
	loaded: LoadingStatus;
	error: (error: string) => LoadingStatus;
}

export interface ErrorObject {
	errorMessage: string;
}

export type LocalStorageEventsHandler = () => void;

export type LocalStorageEventsHandlerStore = Record<LocalStorageEvents, LocalStorageEventsHandler[]>;

export type PureObject = Record<string, any>;
