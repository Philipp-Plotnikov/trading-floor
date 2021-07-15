import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'goods-component',
	templateUrl: './goods.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsComponent {}
