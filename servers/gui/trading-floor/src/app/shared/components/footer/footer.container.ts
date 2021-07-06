import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'footer',
	template: ' <footer-component></footer-component> ',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterContainer {}
