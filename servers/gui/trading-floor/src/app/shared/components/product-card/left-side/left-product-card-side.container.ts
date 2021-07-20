import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';

@Component({
	selector: 'left-product-card-side',
	template: ' <left-product-card-side-component [productData]="productData"></left-product-card-side-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftProductCardSideContainer {
	@Input() public readonly productData: IProductCard.ProductData;
}
