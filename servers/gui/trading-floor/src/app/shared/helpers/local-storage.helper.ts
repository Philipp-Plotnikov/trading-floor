import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {CART_STORAGE_KEY} from '../../config';
import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';
import {LocalStorageEvents} from '@entities/common/common.enums';
import {LocalStorageEventsHandler} from '@entities/common/common.interfaces';
import {LOCAL_STORAGE_EVENTS_HANDLER_STORE} from '@entities/common/common.constants';

export class LocalStorageHelper {
	private static EVENT_HANDLERS = LOCAL_STORAGE_EVENTS_HANDLER_STORE;

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
		this.callHandlers([LocalStorageEvents.Change]);
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
		this.callHandlers([LocalStorageEvents.Change]);
	}

	public static clearStorage(): void {
		localStorage.clear();
		this.callHandlers([LocalStorageEvents.Change]);
	}

	public static isEmpty(key: string): boolean {
		const data = LocalStorageHelper.getData(key);
		return !data;
	}

	public static on(event: LocalStorageEvents, cb: LocalStorageEventsHandler): void {
		this.EVENT_HANDLERS[event].push(cb);
	}

	public static getCartItemAmount(): number {
		const storageCartData = LocalStorageHelper.getData<ICartList.StorageData>(CART_STORAGE_KEY);
		const processedCartData = Object.values(storageCartData);
		let amount = 0;
		processedCartData.forEach((cartItem: CartItem.Data) => {
			amount += cartItem.amount;
		});
		return amount;
	}

	private static createCartItemKey(data: IProductCard.ProductData): string {
		return data.title;
	}

	private static callHandlers($events: LocalStorageEvents[]): void {
		$events.forEach(($event) => {
			this.EVENT_HANDLERS[$event].forEach((cb) => {
				cb();
			});
		});
	}
}
