import {NgModule, Type} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {MainEffects} from '@store/main/effects';
import {GoodsEffects} from '@store/goods/effects';
import {ProductEffects} from '@store/product/effects';

export const ROOT_EFFECTS: Type<any>[] = [MainEffects, GoodsEffects, ProductEffects];

@NgModule({
	imports: [EffectsModule.forRoot(ROOT_EFFECTS)],
})
export class RootEffectsModule {}
