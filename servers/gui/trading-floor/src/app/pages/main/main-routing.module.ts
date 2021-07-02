import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainer} from '@pages/main/main.container';

const routes: Routes = [
  {
    path: '',
    component: MainContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
