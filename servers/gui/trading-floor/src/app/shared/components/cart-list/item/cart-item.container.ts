import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';

@Component({
	selector: 'cart-item',
	template: '<cart-item-component [data]="data"></cart-item-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemContainer {
	@Input() public readonly data: CartItem.Data;
}
