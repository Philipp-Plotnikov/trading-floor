import {LocalStorageEventsHandlerStore, Statuses} from '@entities/common/common.interfaces';
import {LocalStorageEvents} from '@entities/common/common.enums';

export const status: Statuses = {
	default: {loading: false, loaded: false, error: null},
	loading: {loading: true, loaded: false, error: null},
	loaded: {loading: false, loaded: true, error: null},
	error: (error: string) => ({loading: false, loaded: false, error}),
};

export const CART_LOCAL_STORAGE_KEY = 'keyData';

export const LOCAL_STORAGE_EVENTS_HANDLER_STORE: LocalStorageEventsHandlerStore = {
	[LocalStorageEvents.Change]: [],
};
