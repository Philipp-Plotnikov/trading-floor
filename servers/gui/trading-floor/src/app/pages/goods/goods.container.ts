import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'goods',
	template: '<goods-component></goods-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsContainer {}
