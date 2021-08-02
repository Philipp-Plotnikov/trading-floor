import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';

@Component({
	selector: 'cart-list-component',
	templateUrl: './cart-list.component.html',
	styleUrls: ['./cart-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
	@Input() public data: ICartList.ProcessedData;
}
