import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {ProductActions} from '@store/product/actions';
import {delay, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {routerSelector} from '@store/router/selectors';
import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';
import {ProductMochs} from '../../mochs/product.mochs';

@Injectable()
export class ProductEffects {
	public loadProductData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProductActions.loadProductDataRequested),
			withLatestFrom(this.store.select(routerSelector.selectRouteParams)),
			delay(1000),
			switchMap(([_, params]: [Action, IProductCard.RequestProductDataParams]) =>
				of(
					ProductActions.loadProductDataSucceeded({
						payload: ProductMochs.PRODUCTS[params.catalogName][params.productId],
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private store: Store) {}
}
