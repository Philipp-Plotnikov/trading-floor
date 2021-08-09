import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {CART_STORAGE_KEY} from '../../config';
import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';
import {LocalStorageEvents} from '@entities/common/common.enums';
import {LocalStorageEventsHandler} from '@entities/common/common.interfaces';
import {LOCAL_STORAGE_EVENTS_HANDLER_STORE} from '@entities/common/common.constants';
import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, WINDOW} from '@ng-web-apis/common';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageHelper {
	private static EVENT_HANDLERS = LOCAL_STORAGE_EVENTS_HANDLER_STORE;

	constructor(
		@Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
		@Inject(WINDOW) private readonly window: Window
	) {}

	public getData<T>(key: string): T {
		const rawData = this.localStorage.getItem(key);
		return JSON.parse(rawData) as T;
	}

	public setData<T>(key: string, data: T): void {
		if (typeof data === 'string') {
			this.localStorage.setItem(key, data);
			return;
		}
		const rawData = JSON.stringify(data);
		this.localStorage.setItem(key, rawData);
		this.callHandlers([LocalStorageEvents.Change]);
	}

	public modifyCartData(data: IProductCard.ProductData): void {
		const key = this.createCartItemKey(data);
		const storageCartData = this.getData<ICartList.StorageData>(CART_STORAGE_KEY);
		if (key in storageCartData) {
			storageCartData[key].amount += data.amount;
			this.setData(CART_STORAGE_KEY, storageCartData);
			return;
		}
		storageCartData[key] = new CartItem.Data(data.title, data.imgUrl, data.amount);
		this.setData(CART_STORAGE_KEY, storageCartData);
	}

	public removeData(key: string): void {
		this.localStorage.removeItem(key);
		this.callHandlers([LocalStorageEvents.Change]);
	}

	public clearStorage(): void {
		this.localStorage.clear();
		this.callHandlers([LocalStorageEvents.Change]);
	}

	public isEmpty(key: string): boolean {
		const data = this.getData(key);
		return !data;
	}

	public on(event: LocalStorageEvents, cb: LocalStorageEventsHandler): void {
		if (event === LocalStorageEvents.Change) {
			this.window.addEventListener('storage', cb, false);
		}
		LocalStorageHelper.EVENT_HANDLERS[event].push(cb);
	}

	public getCartItemAmount(): number {
		if (this.isEmpty(CART_STORAGE_KEY)) {
			return null;
		}
		const storageCartData = this.getData<ICartList.StorageData>(CART_STORAGE_KEY);
		const processedCartData = Object.values(storageCartData);
		let amount = 0;
		processedCartData.forEach((cartItem: CartItem.Data) => {
			amount += cartItem.amount;
		});
		return amount;
	}

	public createCartItemKey(data: IProductCard.ProductData): string {
		return data.title;
	}

	private callHandlers($events: LocalStorageEvents[]): void {
		$events.forEach(($event) => {
			LocalStorageHelper.EVENT_HANDLERS[$event].forEach((cb) => {
				cb();
			});
		});
	}
}
