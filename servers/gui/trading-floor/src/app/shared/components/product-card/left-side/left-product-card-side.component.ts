import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';

@Component({
	selector: 'left-product-card-side-component',
	templateUrl: './left-product-card-side.component.html',
	styleUrls: ['./left-product-card-side.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftProductCardSideComponent {
	@Input() public readonly productData: IProductCard.ProductData;
}
