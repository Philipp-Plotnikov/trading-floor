import {NgModule, Type} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';

const ROOT_EFFECTS: Type<any>[] = [];

@NgModule({
	imports: [EffectsModule.forRoot(ROOT_EFFECTS)],
})
export class RootEffectsModule {}
