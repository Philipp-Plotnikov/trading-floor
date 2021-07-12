import {NgModule, Type} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {DashboardEffects} from '@store/dashboard/effects';

export const ROOT_EFFECTS: Type<any>[] = [DashboardEffects];

@NgModule({
	imports: [EffectsModule.forRoot(ROOT_EFFECTS)],
})
export class RootEffectsModule {}
