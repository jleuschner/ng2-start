import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../services/auth-guard/auth-guard.service';

import { DemoComponent } from './demo.component';
import { Seite1Component } from './seite1/index';
import { Seite2Component } from './seite2/index';

const demoRoutes: Routes = [
    { 
        path: 'demo', 
        component: DemoComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'seite1'
            },
            {
                path: 'seite1',
                component: Seite1Component
            },
            {
                path: 'seite2',
                component: Seite2Component
            }
        ] 
    }
];

export const demoRouting: ModuleWithProviders = RouterModule.forChild(demoRoutes);
