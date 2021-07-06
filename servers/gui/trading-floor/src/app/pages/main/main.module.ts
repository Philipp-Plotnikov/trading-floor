import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from './main.component';
import {MainContainer} from './main.container';
import {MainRoutingModule} from '@pages/main/main-routing.module';

@NgModule({
	declarations: [MainComponent, MainContainer],
	imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
