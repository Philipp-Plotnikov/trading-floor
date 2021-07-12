import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'main-component',
	templateUrl: './main.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
