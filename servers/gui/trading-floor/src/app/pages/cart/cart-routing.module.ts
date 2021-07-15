import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartContainer} from '@pages/cart/cart.container';

const routes: Routes = [
	{
		path: '',
		component: CartContainer,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CartRoutingModule {}
