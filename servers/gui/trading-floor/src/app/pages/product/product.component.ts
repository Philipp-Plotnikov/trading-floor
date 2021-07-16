import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'product-component',
	templateUrl: './product.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {}
