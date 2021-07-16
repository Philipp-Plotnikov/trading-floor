import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MainActions} from '@store/main/actions';
import {DashboardMochs} from '../../mochs/dashboard.mochs';

@Injectable()
export class MainEffects {
	loadCategoryData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(MainActions.loadCategoriesRequested),
			delay(1000),
			switchMap(() => of(MainActions.loadCategoriesSucceeded({payload: DashboardMochs.CATEGORY_DATA})))
		)
	);

	constructor(private actions$: Actions) {}
}
