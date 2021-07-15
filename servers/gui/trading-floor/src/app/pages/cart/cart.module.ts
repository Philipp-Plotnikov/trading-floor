import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {CartContainer} from '@pages/cart/cart.container';
import {CartRoutingModule} from '@pages/cart/cart-routing.module';

@NgModule({
	declarations: [CartComponent, CartContainer],
	imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
