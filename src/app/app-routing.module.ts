import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './signup/signup.module#SignupComponentModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationComponentModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupComponentModule' },
  { path: 'createdareoraware', loadChildren: './createdareoraware/createdareoraware.module#CreateDareOrAwarePageModule' },
  { path: 'edit' , loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'dare' , loadChildren: './dare/dare.module#DarePageModule' },
  { path: 'aware' , loadChildren: './aware/aware.module#AwarePageModule'},
  { path: 'search' , loadChildren: './search/search.module#SearchPageModule'},
  { path: 'profile' , loadChildren: './profile/profile.module#ProfilePageModule'},
  { path: 'forgot-password' , loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'}];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
