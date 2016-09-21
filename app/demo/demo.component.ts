import { Component } from '@angular/core';

import { Seite1Component } from './seite1/index';

@Component({
  selector: 'demo',
  template: `
    <h1>Demo</h1>
    <seite1></seite1>
    <seite2></seite2>
    `
})
export class DemoComponent { }
