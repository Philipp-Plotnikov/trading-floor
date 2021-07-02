import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'global-search-input',
  template: `
    <global-search-input></global-search-input>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalSearchInputContainer {}
