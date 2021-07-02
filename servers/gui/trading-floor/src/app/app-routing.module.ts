import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterHelper} from '@shared/helpers/router.helper';
import {ERouting} from '@entities/routing/routing.enums';

const routes: Routes = [
  ...RouterHelper.getPageRouteConfigs(ERouting.Pages),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
