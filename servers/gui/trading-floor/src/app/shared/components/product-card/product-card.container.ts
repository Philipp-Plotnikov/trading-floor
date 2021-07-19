import {ChangeDetectionStrategy, Component} from '@angular/core';
import {productSelectors} from '@store/product/selectors';
import {Store} from '@ngrx/store';
import {ProductActions} from '@store/product/actions';
import {Observable} from 'rxjs';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LoadingStatus} from '@entities/common/common.interfaces';

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
