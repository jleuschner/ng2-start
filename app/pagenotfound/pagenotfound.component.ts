import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Page not Found...</h1>
    <button (click)="goBack()">Back</button>
    `
})
export class PagenotfoundComponent { 

  goBack(): void {
    window.history.back();
  }

}
