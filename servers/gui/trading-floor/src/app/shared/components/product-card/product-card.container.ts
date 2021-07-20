import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {productSelectors} from '@store/product/selectors';
import {ProductActions} from '@store/product/actions';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LoadingStatus} from '@entities/common/common.interfaces';
import {Observable} from 'rxjs';

@Component({
	selector: 'product-card',
	template: `
		<product-card-component
			[productData]="productData$ | async"
			[productDataLoadingStatus]="productDataLoadingStatus$ | async"
		></product-card-component>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardContainer {
	public readonly productData$: Observable<IProductCard.ProductData>;
	public readonly productDataLoadingStatus$: Observable<LoadingStatus>;

	constructor(private store: Store) {
		this.initActions();
		this.productData$ = this.store.select(productSelectors.productData);
		this.productDataLoadingStatus$ = this.store.select(productSelectors.productDataLoadingStatus);
	}

	private initActions(): void {
		this.store.dispatch(ProductActions.loadProductDataRequested());
	}
}
