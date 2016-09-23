import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../services/auth-guard/auth-guard.service';

import { RestrictedpageComponent } from './restrictedpage.component';

const restrictedpageRoutes: Routes = [
  { 
    path: 'restricted', 
    component: RestrictedpageComponent,
    canActivate: [AuthGuard] 
  }
];

export const restrictedpageRouting: ModuleWithProviders = RouterModule.forChild(restrictedpageRoutes);
