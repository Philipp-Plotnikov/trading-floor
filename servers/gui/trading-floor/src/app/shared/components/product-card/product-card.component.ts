import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LoadingStatus} from '@entities/common/common.interfaces';

@Component({
	selector: 'product-card-component',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input() public readonly productData: IProductCard.ProductData;
	@Input() public readonly productDataLoadingStatus: LoadingStatus;
}
