import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './product-card.component';
import {ProductCardContainer} from '@shared/components/product-card/product-card.container';

@NgModule({
	declarations: [ProductCardComponent, ProductCardContainer],
	imports: [CommonModule],
	exports: [ProductCardContainer],
})
export class ProductCardModule {}
