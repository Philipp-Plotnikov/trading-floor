import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GoodsActions} from '@store/goods/actions';
import {CatalogMochs} from '../../mochs/catalog.mochs';

@Injectable()
export class GoodsEffects {
	loadCatalogData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(GoodsActions.loadCatalogDataRequested),
			delay(1000),
			switchMap(({payload}) => {
				console.log('Effects');
				return of(GoodsActions.loadCatalogDataSucceeded({payload: CatalogMochs.GOODS[payload.catalogName]}));
			})
		)
	);

	constructor(private actions$: Actions) {}
}
