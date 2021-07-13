import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'catalog',
	template: '<catalog-component></catalog-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogContainer {}
