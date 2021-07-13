import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from './catalog.component';
import {CatalogContainer} from '@shared/components/catalog/catalog.container';

@NgModule({
	declarations: [CatalogComponent, CatalogContainer],
	imports: [CommonModule],
	exports: [CatalogContainer],
})
export class CatalogModule {}
