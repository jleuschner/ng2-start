import { Routes }         from '@angular/router';

import { AuthGuard }      from '../services/auth-guard/auth-guard.service';
import { AuthService }    from '../services/auth-guard/auth.service';
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
export const authProviders = [
  AuthGuard,
  AuthService
];
