import {IRouting} from '@entities/routing/routing.interfaces';
import {ERouting} from '@entities/routing/routing.enums';

export const PAGE_ROUTING_MODULES: IRouting.PagesRoutingConfig = {
	[ERouting.Pages.Main]: () => import('@pages/main/main.module').then(({MainModule}) => MainModule),
	[ERouting.Pages.Goods]: () => import('@pages/goods/goods.module').then(({GoodsModule}) => GoodsModule),
	[ERouting.Pages.Product]: () => import('@pages/product/product.module').then(({ProductModule}) => ProductModule),
	[ERouting.Pages.Cart]: () => import('@pages/cart/cart.module').then(({CartModule}) => CartModule),
};
