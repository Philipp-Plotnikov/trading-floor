import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';

@Component({
	selector: 'right-product-card-side',
	template: ' <right-product-card-side-component [productData]="productData"></right-product-card-side-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightProductCardSideContainer {
	@Input() public readonly productData: IProductCard.ProductData;
}
