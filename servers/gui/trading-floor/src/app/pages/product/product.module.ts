import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {ProductContainer} from '@pages/product/product.container';
import {ProductCardModule} from '@shared/components/product-card/product-card.module';

@NgModule({
	declarations: [ProductComponent, ProductContainer],
	imports: [CommonModule, ProductCardModule, ProductRoutingModule],
})
export class ProductModule {}
