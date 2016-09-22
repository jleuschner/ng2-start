import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictedpageComponent } from './restrictedpage.component'

import { restrictedpageRouting } from './restrictedpage.routing';

@NgModule({
    imports: [
        CommonModule,
        restrictedpageRouting
    ],
    declarations: [
        RestrictedpageComponent
    ]
})
export class RestrictedpageModule { }

