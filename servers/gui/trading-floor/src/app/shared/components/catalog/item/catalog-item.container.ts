import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';

@Component({
	selector: 'catalog-item',
	template: '<catalog-item-component [data]="data"></catalog-item-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogItemContainer {
	@Input() public readonly data: ICatalog.CatalogData;
}
