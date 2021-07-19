import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'product',
	template: ' <product-component></product-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainer {}
