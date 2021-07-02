import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import {MainContainer} from "./main.container";
import {MainRoutingModule} from '@pages/main/main-routing.module';
import {TopNavigationPanelModule} from '@shared/components/top-navigation-panel/top-navigation-panel.module';


@NgModule({
  declarations: [
    MainComponent,
    MainContainer,
  ],
  imports: [
    CommonModule,
    TopNavigationPanelModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
