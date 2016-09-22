import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestrictedpageComponent } from './restrictedpage.component';

const restrictedpageRoutes: Routes = [
  { path: 'restricted', component: RestrictedpageComponent }
];

export const restrictedpageRouting: ModuleWithProviders = RouterModule.forChild(restrictedpageRoutes);
