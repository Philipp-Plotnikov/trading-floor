import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {LocalStorageEvents} from '@entities/common/common.enums';

@Component({
	selector: 'top-navigation-panel',
	template: ' <top-navigation-panel-component ></top-navigation-panel-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationPanelContainer {
	public counter: number;

	constructor() {
		LocalStorageHelper.on(LocalStorageEvents.Change, this.onStorageChanged.bind(this));
	}

	private onStorageChanged(): void {
		this.counter = LocalStorageHelper.getCartItemAmount();
	}
}
