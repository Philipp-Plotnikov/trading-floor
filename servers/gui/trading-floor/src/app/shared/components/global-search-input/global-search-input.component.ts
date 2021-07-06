import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'global-search-input-component',
	templateUrl: './global-search-input.component.html',
	styleUrls: ['./global-search-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalSearchInputComponent {}
