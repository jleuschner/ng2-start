import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <h1>Demo</h1>
    <nav>
    <a routerLink="seite1" routerLinkActive="active">Seite1</a>
    <a routerLink="seite2" routerLinkActive="active">Seite2</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class DemoComponent { }
