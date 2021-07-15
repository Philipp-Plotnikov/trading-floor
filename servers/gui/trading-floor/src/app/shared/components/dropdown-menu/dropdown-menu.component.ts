import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'dropdown-menu-component',
	templateUrl: './dropdown-menu.component.html',
	styleUrls: ['./dropdown-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {}
