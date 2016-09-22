import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardModule } from './dashboard/index';
import { DemoModule } from './demo/index';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        DemoModule,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        PagenotfoundComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
