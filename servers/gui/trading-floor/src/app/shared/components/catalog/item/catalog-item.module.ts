import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogItemComponent} from './catalog-item.component';
import {CatalogItemContainer} from '@shared/components/catalog/item/catalog-item.container';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	declarations: [CatalogItemComponent, CatalogItemContainer],
	imports: [CommonModule, MatCardModule],
	exports: [CatalogItemContainer],
})
export class CatalogItemModule {}
