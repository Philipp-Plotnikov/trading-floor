import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';

@Component({
	selector: 'right-product-card-side-component',
	templateUrl: './right-product-card-side.component.html',
	styleUrls: ['./right-product-card-side.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightProductCardSideComponent {
	@Input() public readonly productData: IProductCard.ProductData;
}
