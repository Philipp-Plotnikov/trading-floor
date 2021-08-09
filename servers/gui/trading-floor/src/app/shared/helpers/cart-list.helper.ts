import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CartListHelper {
	constructor(private localStorageHelper: LocalStorageHelper) {}

	public createCartStorageData(cartItemData: IProductCard.ProductData[]): ICartList.StorageData {
		const result: ICartList.StorageData = Object.create(null);
		cartItemData.forEach((cartItem) => {
			const key = this.localStorageHelper.createCartItemKey(cartItem);
			result[key] = new CartItem.Data(cartItem.title, cartItem.imgUrl, cartItem.amount).getMapObject();
		});
		return result;
	}
}
