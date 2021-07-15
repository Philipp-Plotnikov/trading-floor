import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchInputComponent} from './search-input.component';
import {SearchInputContainer} from '@shared/components/search-input/search-input.container';

@NgModule({
	declarations: [SearchInputComponent, SearchInputContainer],
	imports: [CommonModule],
	exports: [SearchInputContainer],
})
export class SearchInputModule {}
