import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownMenuComponent} from './dropdown-menu.component';
import {DropdownMenuContainer} from '@shared/components/dropdown-menu/dropdown-menu.container';

@NgModule({
	declarations: [DropdownMenuComponent, DropdownMenuContainer],
	imports: [CommonModule],
	exports: [DropdownMenuContainer],
})
export class DropdownMenuModule {}
