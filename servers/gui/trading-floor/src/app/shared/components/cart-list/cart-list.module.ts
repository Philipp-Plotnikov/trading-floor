import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartListComponent} from './cart-list.component';
import {CartListContainer} from '@shared/components/cart-list/cart-list.container';
import {CartItemModule} from '@shared/components/cart-list/item/cart-item.module';

@NgModule({
	declarations: [CartListComponent, CartListContainer],
	imports: [CommonModule, CartItemModule],
	exports: [CartListContainer],
})
export class CartListModule {}
