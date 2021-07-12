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

export interface CustomError {
	errorMessage: string;
}

export type PureObject = Record<string, any>;
