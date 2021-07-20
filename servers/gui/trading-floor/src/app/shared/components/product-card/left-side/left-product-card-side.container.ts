import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'left-product-card-side',
	template: '<left-product-card-side-component></left-product-card-side-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftProductCardSideContainer {}
