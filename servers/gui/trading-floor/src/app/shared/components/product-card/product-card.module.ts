import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './product-card.component';
import {ProductCardContainer} from '@shared/components/product-card/product-card.container';
import {RightProductCardSideComponent} from './right-side/right-product-card-side.component';
import {LeftProductCardSideComponent} from './left-side/left-product-card-side.component';
import {RightProductCardSideContainer} from '@shared/components/product-card/right-side/right-product-card-side.container';
import {LeftProductCardSideContainer} from '@shared/components/product-card/left-side/left-product-card-side.container';

@NgModule({
	declarations: [
		ProductCardComponent,
		ProductCardContainer,
		RightProductCardSideComponent,
		LeftProductCardSideComponent,
		LeftProductCardSideContainer,
		RightProductCardSideContainer,
	],
	imports: [CommonModule],
	exports: [ProductCardContainer],
})
export class ProductCardModule {}
