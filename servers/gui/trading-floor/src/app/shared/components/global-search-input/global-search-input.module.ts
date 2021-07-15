import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalSearchInputComponent} from './global-search-input.component';
import {GlobalSearchInputContainer} from '@shared/components/global-search-input/global-search-input.container';
import {CustomSelectorModule} from '@shared/components/custom-selector/custom-selector.module';
import {MatIconModule} from '@angular/material/icon';
import {SearchInputModule} from '@shared/components/search-input/search-input.module';

@NgModule({
	declarations: [GlobalSearchInputComponent, GlobalSearchInputContainer],
	imports: [CommonModule, CustomSelectorModule, MatIconModule, SearchInputModule],
	exports: [GlobalSearchInputContainer],
})
export class GlobalSearchInputModule {}
