import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouterHelper} from '@shared/helpers/router.helper';
import {ERouting} from '@entities/routing/routing.enums';
import {REDIRECT_ROUTES} from '@entities/routing/routing.constants';

const routes: Routes = [
  ...RouterHelper.getPageRouteConfigs(ERouting.Pages),
    ...REDIRECT_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
