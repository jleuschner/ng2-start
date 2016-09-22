import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 StarterApp</h1>
    <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/demo" routerLinkActive="active">Demo</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
