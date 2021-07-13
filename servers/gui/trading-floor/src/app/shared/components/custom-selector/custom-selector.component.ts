import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'custom-selector-component',
	templateUrl: './custom-selector.component.html',
	styleUrls: ['./custom-selector.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectorComponent {}
