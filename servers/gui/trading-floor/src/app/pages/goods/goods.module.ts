import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoodsComponent} from './goods.component';
import {GoodsContainer} from '@pages/goods/goods.container';
import {GoodsRoutingModule} from '@pages/goods/goods-routing.module';

@NgModule({
	declarations: [GoodsComponent, GoodsContainer],
	imports: [CommonModule, GoodsRoutingModule],
})
export class GoodsModule {}
