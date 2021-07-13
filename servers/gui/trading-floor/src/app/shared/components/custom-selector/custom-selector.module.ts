import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomSelectorComponent} from './custom-selector.component';
import {CustomSelectorContainer} from '@shared/components/custom-selector/custom-selector.container';

@NgModule({
	declarations: [CustomSelectorComponent, CustomSelectorContainer],
	imports: [CommonModule],
	exports: [CustomSelectorContainer],
})
export class CustomSelectorModule {}
