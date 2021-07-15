import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'cart-component',
	templateUrl: './cart.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {}
