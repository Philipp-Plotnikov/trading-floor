import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'top-navigation-panel-component',
	templateUrl: './top-navigation-panel.component.html',
	styleUrls: ['./top-navigation-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationPanelComponent {
	@Input() public readonly counter: number;
}
