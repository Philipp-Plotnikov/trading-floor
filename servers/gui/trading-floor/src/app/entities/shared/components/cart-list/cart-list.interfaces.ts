import {CartItem} from '@entities/shared/components/cart-item/cart-item.classes';

export namespace ICartList {
	export type ProcessedData = CartItem.Data[];

	export type StorageData = Record<string, CartItem.Data>;
}
