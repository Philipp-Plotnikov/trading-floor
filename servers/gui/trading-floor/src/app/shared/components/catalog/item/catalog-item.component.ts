import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';

@Component({
	selector: 'catalog-item-component',
	templateUrl: './catalog-item.component.html',
	styleUrls: ['./catalog-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogItemComponent {
	@Input() public readonly data: ICatalog.CatalogData;
}
