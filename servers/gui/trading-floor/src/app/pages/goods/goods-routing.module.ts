import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoodsContainer} from '@pages/goods/goods.container';

const routes: Routes = [
	{
		path: '',
		component: GoodsContainer,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GoodsRoutingModule {}
