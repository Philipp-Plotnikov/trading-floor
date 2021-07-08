import {Statuses} from '@entities/common/common.interfaces';

export const status: Statuses = {
	default: {loading: false, loaded: false, error: null},
	loading: {loading: true, loaded: false, error: null},
	loaded: {loading: false, loaded: true, error: null},
	error: (error: string) => ({loading: false, loaded: false, error}),
};
