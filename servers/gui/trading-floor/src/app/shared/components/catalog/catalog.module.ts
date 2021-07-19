import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from './catalog.component';
import {CatalogContainer} from '@shared/components/catalog/catalog.container';
import {CatalogItemModule} from '@shared/components/catalog/item/catalog-item.module';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [CatalogComponent, CatalogContainer],
	imports: [CommonModule, CatalogItemModule, RouterModule],
	exports: [CatalogContainer],
})
export class CatalogModule {}
