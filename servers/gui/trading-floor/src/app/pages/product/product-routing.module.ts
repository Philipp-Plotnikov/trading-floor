import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductContainer} from '@pages/product/product.container';

const routes: Routes = [
	{
		path: '',
		component: ProductContainer,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
