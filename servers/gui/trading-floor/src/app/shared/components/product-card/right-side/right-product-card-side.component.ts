import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {CART_STORAGE_KEY} from '../../../../config';
import {CartListHelper} from '@shared/helpers/cart-list.helper';

@Component({
	selector: 'right-product-card-side-component',
	templateUrl: './right-product-card-side.component.html',
	styleUrls: ['./right-product-card-side.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightProductCardSideComponent {
	@Input() public readonly productData: IProductCard.ProductData;

	constructor(private cartListHelper: CartListHelper, private localStorageHelper: LocalStorageHelper) {}

	public onPutInCartButtonClick(): void {
		if (this.localStorageHelper.isEmpty(CART_STORAGE_KEY)) {
			const storageCartData = this.cartListHelper.createCartStorageData([this.productData]);
			this.localStorageHelper.setData(CART_STORAGE_KEY, storageCartData);
			return;
		}
		this.localStorageHelper.modifyCartData(this.productData);
	}
}
