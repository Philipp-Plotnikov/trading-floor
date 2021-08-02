import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItemContainer} from '@shared/components/cart-list/item/cart-item.container';
import {CartItemComponent} from '@shared/components/cart-list/item/cart-item.component';

@NgModule({
	declarations: [CartItemContainer, CartItemComponent],
	imports: [CommonModule],
	exports: [CartItemContainer],
})
export class CartItemModule {}
