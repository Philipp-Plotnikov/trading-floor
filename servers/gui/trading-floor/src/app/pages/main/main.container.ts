import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MainActions} from '@store/main/actions';
import {Store} from '@ngrx/store';

@Component({
	selector: 'main',
	template: ' <main-component></main-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainer {
	constructor(private store: Store) {
		this.initActions();
	}

	private initActions(): void {
		this.store.dispatch(MainActions.loadCategoriesRequested());
	}
}
