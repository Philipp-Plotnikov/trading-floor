import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'search-input-component',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {}
