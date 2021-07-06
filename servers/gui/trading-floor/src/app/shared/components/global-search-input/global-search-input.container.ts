import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'global-search-input',
	template: ' <global-search-input-component></global-search-input-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalSearchInputContainer {}
