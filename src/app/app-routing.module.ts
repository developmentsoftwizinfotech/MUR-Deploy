import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/login/auth.guard';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
// import { AuthGuardReverseGuard } from './auth/login/auth-guard-reverse.guard';

export const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },



  {
    path: 'auth',
    // canActivate: [AuthGuardReverseGuard],
    component: NbAuthComponent,
    children: [
      {
        path: '',

        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
        {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'vendor-login',
    component: VendorLoginComponent,
  }

];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {

}













// NoAuthGuard
