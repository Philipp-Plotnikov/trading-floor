import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'cart',
	template: '<cart-component></cart-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartContainer {}
