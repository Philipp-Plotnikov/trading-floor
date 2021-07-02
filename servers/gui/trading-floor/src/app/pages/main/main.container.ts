import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'main',
  template: `
    <main-component></main-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainer {}
