import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
	selector: 'goods',
	template: '<goods-component></goods-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsContainer {
	constructor(private store: Store) {}
}
