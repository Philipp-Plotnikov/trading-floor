import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from './catalog.component';
import {CatalogContainer} from '@shared/components/catalog/catalog.container';
import {CatalogItemModule} from '@shared/components/catalog/item/catalog-item.module';

@NgModule({
	declarations: [CatalogComponent, CatalogContainer],
	imports: [CommonModule, CatalogItemModule],
	exports: [CatalogContainer],
})
export class CatalogModule {}
