import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {LoadingStatus} from '@entities/common/common.interfaces';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {productSelectors} from '@store/product/selectors';
import {ProductActions} from '@store/product/actions';

@Component({
	selector: 'right-product-card-side',
	template: `
		<right-product-card-side-component
			[productData]="productData$ | async"
			[productDataLoadingStatus]="productDataLoadingStatus$ | async"
		></right-product-card-side-component>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightProductCardSideContainer {
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
