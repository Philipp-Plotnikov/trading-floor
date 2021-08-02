import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {LocalStorageEvents} from '@entities/common/common.enums';

@Component({
	selector: 'top-navigation-panel',
	template: ' <top-navigation-panel-component [counter]="counter"></top-navigation-panel-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationPanelContainer implements OnInit {
	public counter: number;

	constructor(private cdr: ChangeDetectorRef) {
		LocalStorageHelper.on(LocalStorageEvents.Change, this.onStorageChanged.bind(this));
	}

	public ngOnInit(): void {
		this.counter = LocalStorageHelper.getCartItemAmount();
	}

	private onStorageChanged(): void {
		this.counter = LocalStorageHelper.getCartItemAmount();
		this.cdr.markForCheck();
	}
}
