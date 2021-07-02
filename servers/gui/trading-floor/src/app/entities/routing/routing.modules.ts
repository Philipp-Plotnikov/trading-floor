import {ERouting} from "./routing.enums";
import {IRouting} from "@entities/routing/routing.interfaces";

export const PAGE_ROUTING_MODULES: IRouting.PagesRoutingConfig = {
  [ERouting.Pages.Main]: () => import('@pages/main/main.module').then(({MainModule}) => MainModule),
};
