import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'catalog-component',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {}
