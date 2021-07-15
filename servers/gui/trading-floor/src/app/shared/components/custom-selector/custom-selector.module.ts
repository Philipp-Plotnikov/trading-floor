import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomSelectorComponent} from './custom-selector.component';
import {CustomSelectorContainer} from '@shared/components/custom-selector/custom-selector.container';
import {DropdownMenuModule} from '@shared/components/dropdown-menu/dropdown-menu.module';

@NgModule({
	declarations: [CustomSelectorComponent, CustomSelectorContainer],
	imports: [CommonModule, DropdownMenuModule],
	exports: [CustomSelectorContainer],
})
export class CustomSelectorModule {}
