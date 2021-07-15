import {IRouting} from '@entities/routing/routing.interfaces';
import {ERouting} from '@entities/routing/routing.enums';

export const PAGE_ROUTING_MODULES: IRouting.PagesRoutingConfig = {
	[ERouting.Pages.Main]: () => import('@pages/main/main.module').then(({MainModule}) => MainModule),
	[ERouting.Pages.Cart]: () => import('@pages/cart/cart.module').then(({CartModule}) => CartModule),
	[ERouting.Pages.Goods]: () => import('@pages/goods/goods.module').then(({GoodsModule}) => GoodsModule),
};
