import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FooterContainer} from '@shared/components/footer/footer.container';

@NgModule({
	declarations: [FooterComponent, FooterContainer],
	imports: [CommonModule],
	exports: [FooterContainer],
})
export class FooterModule {}
