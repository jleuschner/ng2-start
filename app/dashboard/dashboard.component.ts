import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Dashboard</h1>
    <button (click)="goBack()">Back</button>
    `
})
export class DashboardComponent { 

  goBack(): void {
    window.history.back();
  }

}
