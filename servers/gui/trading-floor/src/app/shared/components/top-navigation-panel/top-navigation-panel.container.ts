import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'top-navigation-panel',
	template: ' <top-navigation-panel-component> </top-navigation-panel-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationPanelContainer {}
