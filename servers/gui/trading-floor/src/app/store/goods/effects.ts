import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {GoodsActions} from '@store/goods/actions';
import {routerSelector} from '@store/router/selectors';
import {Action, Store} from '@ngrx/store';
import {CatalogMochs} from '../../mochs/catalog.mochs';

@Injectable()
export class GoodsEffects {
	loadCatalogData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(GoodsActions.loadCatalogDataRequested),
			withLatestFrom(this.store.select(routerSelector.selectRouteParam('catalogName'))),
			delay(1000),
			switchMap(([_, catalogName]: [Action, string]) =>
				of(GoodsActions.loadCatalogDataSucceeded({payload: CatalogMochs.GOODS[catalogName]}))
			)
		)
	);

	constructor(private actions$: Actions, private store: Store) {}
}
