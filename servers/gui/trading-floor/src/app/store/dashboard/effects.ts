import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, switchMap} from 'rxjs/operators';
import {DashboardActions} from '@store/dashboard/actions';
import {of} from 'rxjs';
import {DashboardMochs} from '../../mochs/dashboard.mochs';

@Injectable()
export class DashboardEffects {
	loadCategoryData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(DashboardActions.loadCategoriesRequested),
			delay(1000),
			switchMap(() => of(DashboardActions.loadCategoriesSucceeded({payload: DashboardMochs.CATEGORY_DATA})))
		)
	);

	constructor(private actions$: Actions) {}
}
