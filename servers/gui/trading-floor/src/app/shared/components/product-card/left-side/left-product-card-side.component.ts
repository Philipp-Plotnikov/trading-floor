import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'left-product-card-side-component',
	templateUrl: './left-product-card-side.component.html',
	styleUrls: ['./left-product-card-side.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftProductCardSideComponent {}
