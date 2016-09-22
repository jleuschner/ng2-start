import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';
import { Seite1Component } from './seite1/index';
import { Seite2Component } from './seite2/index';

import { demoRouting } from './demo.routing';

@NgModule({
    imports: [
        CommonModule,
        demoRouting
    ],
    declarations: [
        DemoComponent,
        Seite1Component,
        Seite2Component
    ],
    //exports: [ DemoComponent ]
})
export class DemoModule { }
