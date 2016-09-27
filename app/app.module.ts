import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { LoginComponent } from './login/login.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardModule } from './dashboard/index';
import { DemoModule } from './demo/index';
import { RestrictedpageModule } from './restricted/index';


@NgModule({
    imports: [
        BrowserModule,
        routing,
        DashboardModule,
        DemoModule,
        RestrictedpageModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PagenotfoundComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
