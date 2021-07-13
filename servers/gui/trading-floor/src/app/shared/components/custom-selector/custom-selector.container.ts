import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'custom-selector',
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectorContainer {}
