import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LocalStorageEvents} from '@entities/common/common.enums';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';

@Component({
	selector: 'top-navigation-panel',
	template: ' <top-navigation-panel-component [counter]="counter"></top-navigation-panel-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationPanelContainer implements OnInit {
	public counter: number;

	constructor(private cdr: ChangeDetectorRef, private localStorageHelper: LocalStorageHelper) {
		this.localStorageHelper.on(LocalStorageEvents.Change, this.onStorageChanged.bind(this));
	}

	public ngOnInit(): void {
		this.counter = this.localStorageHelper.getCartItemAmount();
	}

	private onStorageChanged(): void {
		this.counter = this.localStorageHelper.getCartItemAmount();
		this.cdr.markForCheck();
	}
}
