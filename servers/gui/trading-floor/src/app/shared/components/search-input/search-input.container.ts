import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'search-input',
	template: '<search-input-component></search-input-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputContainer {}
