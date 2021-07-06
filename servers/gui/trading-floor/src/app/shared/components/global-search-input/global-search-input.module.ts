import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalSearchInputComponent} from './global-search-input.component';
import {GlobalSearchInputContainer} from '@shared/components/global-search-input/global-search-input.container';

@NgModule({
	declarations: [GlobalSearchInputComponent, GlobalSearchInputContainer],
	imports: [CommonModule],
	exports: [GlobalSearchInputContainer],
})
export class GlobalSearchInputModule {}
