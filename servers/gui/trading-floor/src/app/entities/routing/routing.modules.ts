import {IRouting} from '@entities/routing/routing.interfaces';
import {ERouting} from '@entities/routing/routing.enums';

export const PAGE_ROUTING_MODULES: IRouting.PagesRoutingConfig = {
	[ERouting.Pages.Main]: () => import('@pages/main/main.module').then(({MainModule}) => MainModule),
};
