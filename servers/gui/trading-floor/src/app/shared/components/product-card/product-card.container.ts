import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'product-card',
	template: ' <product-card-component></product-card-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardContainer {}
