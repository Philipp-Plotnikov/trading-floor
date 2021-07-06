import {ERouting} from '@entities/routing/routing.enums';

export namespace IRouting {
	export type PagesRoutingConfig = Record<ERouting.Pages, () => Promise<any>>;
}
