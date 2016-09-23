import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictedpageComponent } from './restrictedpage.component'

import { restrictedpageRouting } from './restrictedpage.routing';

import { AuthGuard } from '../services/auth-guard/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        restrictedpageRouting
    ],
    declarations: [
        RestrictedpageComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class RestrictedpageModule { }

