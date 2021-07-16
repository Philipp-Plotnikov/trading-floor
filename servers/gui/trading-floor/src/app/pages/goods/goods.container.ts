import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {GoodsActions} from '@store/goods/actions';

@Component({
	selector: 'goods',
	template: '<goods-component></goods-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsContainer {
	constructor(private store: Store) {
		this.initActions();
	}

	private initActions(): void {
		this.store.dispatch(GoodsActions.loadCatalogDataRequested());
	}
}
