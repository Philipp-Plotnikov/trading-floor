import {Route, Routes} from '@angular/router';
import {ERouting} from '@entities/routing/routing.enums';
import {PAGE_ROUTING_MODULES} from '@entities/routing/routing.modules';

export class RouterHelper {
	public static getPageRouteConfigs(pages: typeof ERouting.Pages): Routes {
		return Object.values(pages).map((page) => RouterHelper.getRouteConfig(page));
	}

	public static getRouteConfig(page: ERouting.Pages): Route {
		return {
			path: page,
			loadChildren: PAGE_ROUTING_MODULES[page],
		};
	}
}
