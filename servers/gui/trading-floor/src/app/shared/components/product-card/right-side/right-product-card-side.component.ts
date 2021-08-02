import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {CART_STORAGE_KEY} from '../../../../config';

@Component({
	selector: 'right-product-card-side-component',
	templateUrl: './right-product-card-side.component.html',
	styleUrls: ['./right-product-card-side.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightProductCardSideComponent {
	@Input() public readonly productData: IProductCard.ProductData;

	public onPutInCartButtonClick(): void {
		if (LocalStorageHelper.isEmpty(CART_STORAGE_KEY)) {
			LocalStorageHelper.setData(CART_STORAGE_KEY, this.productData);
			return;
		}
		LocalStorageHelper.modifyCartData(this.productData);
	}
}