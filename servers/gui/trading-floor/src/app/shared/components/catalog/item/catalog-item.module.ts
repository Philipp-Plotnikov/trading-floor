import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogItemComponent} from './catalog-item.component';
import {CatalogItemContainer} from '@shared/components/catalog/item/catalog-item.container';

@NgModule({
	declarations: [CatalogItemComponent, CatalogItemContainer],
	imports: [CommonModule],
	exports: [CatalogItemContainer],
})
export class CatalogItemModule {}
