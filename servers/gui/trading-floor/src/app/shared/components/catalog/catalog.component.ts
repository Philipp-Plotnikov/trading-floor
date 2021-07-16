import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';
import {LoadingStatus} from '@entities/common/common.interfaces';

@Component({
	selector: 'catalog-component',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
	@Input() public readonly catalogData: ICatalog.CatalogData[];
	@Input() public readonly catalogDataLoadingStatus: LoadingStatus;
}
