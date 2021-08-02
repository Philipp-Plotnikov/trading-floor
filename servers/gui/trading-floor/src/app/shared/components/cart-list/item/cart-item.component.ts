import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';

@Component({
	selector: 'cart-item-component',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
	@Input() public readonly data: CartItem.Data;
}
