import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {CART_LOCAL_STORAGE_KEY} from '@entities/common/common.constants';

@Component({
	selector: 'cart-list',
	template: '<cart-list-component [data]="data"></cart-list-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListContainer {
	public readonly data: ICartList.ProcessedData;

	constructor() {
		this.data = Object.values(LocalStorageHelper.getData<ICartList.StorageData>(CART_LOCAL_STORAGE_KEY));
	}
}
