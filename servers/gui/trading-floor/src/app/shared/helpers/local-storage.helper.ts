import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {CART_STORAGE_KEY} from '../../config';
import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';

export class LocalStorageHelper {
	public static getData<T>(key: string): T {
		const rawData = localStorage.getItem(key);
		return JSON.parse(rawData) as T;
	}

	public static setData<T>(key: string, data: T): void {
		if (typeof data === 'string') {
			localStorage.setItem(key, data);
			return;
		}
		const rawData = JSON.stringify(data);
		localStorage.setItem(key, rawData);
	}

	public static modifyCartData(data: IProductCard.ProductData): void {
		const key = LocalStorageHelper.createCartItemKey(data);
		const storageCartData = LocalStorageHelper.getData<ICartList.StorageData>(CART_STORAGE_KEY);
		if (key in storageCartData) {
			storageCartData[key].amount += data.amount;
			LocalStorageHelper.setData(CART_STORAGE_KEY, storageCartData);
			return;
		}
		storageCartData[key] = new CartItem.Data(data.title, data.imgUrl, data.amount);
		LocalStorageHelper.setData(CART_STORAGE_KEY, storageCartData);
	}

	public static removeData(key: string): void {
		localStorage.removeItem(key);
	}

	public static clearStorage(): void {
		localStorage.clear();
	}

	public static isEmpty(key: string): boolean {
		const data = LocalStorageHelper.getData(key);
		return !data;
	}

	private static createCartItemKey(data: IProductCard.ProductData): string {
		return data.title;
	}
}
