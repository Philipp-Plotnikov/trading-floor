import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';
import {Observable} from 'rxjs';
import {goodsSelectors} from '@store/goods/selectors';
import {LoadingStatus} from '@entities/common/common.interfaces';

@Component({
	selector: 'catalog',
	template: `
		<catalog-component
			[catalogData]="catalogData$ | async"
			[catalogDataLoadingStatus]="catalogDataLoadingStatus$ | async"
		></catalog-component>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogContainer {
	public readonly catalogData$: Observable<ICatalog.CatalogData[]>;
	public readonly catalogDataLoadingStatus$: Observable<LoadingStatus>;

	constructor(private store: Store) {
		this.catalogData$ = this.store.select(goodsSelectors.catalogData);
		this.catalogDataLoadingStatus$ = this.store.select(goodsSelectors.catalogDataLoadingStatus);
	}
}
