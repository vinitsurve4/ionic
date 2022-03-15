import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'volunteertabs',
    loadChildren: () => import('./tabs/volunteertabs/volunteertabs.module').then( m => m.VolunteertabsPageModule)
  },
  {
    path: 'distresstabs',
    loadChildren: () => import('./tabs/distresstabs/distresstabs.module').then( m => m.DistresstabsPageModule)
  },
  {
    path: 'nearest',
    loadChildren: () => import('./tabs/tabpages/volunteertabpages/nearest/nearest.module').then( m => m.NearestPageModule)
  },  {
    path: 'termsandconditions',
    loadChildren: () => import('./termsandconditions/termsandconditions.module').then( m => m.TermsandconditionsPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
