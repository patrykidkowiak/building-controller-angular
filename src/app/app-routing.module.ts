import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ContactComponent} from './contact/contact.component';
import {ErrorComponent} from './error/error.component';
import {RegisterComponent} from './authentication/register/register.component';
import {ActivateComponent} from './authentication/activate/activate.component';
import {LoginComponent} from './authentication/login/login.component';
import {HomeListComponent} from './home/home-list/home-list.component';
import {AuthGuard} from './authentication/auth.guard';

export const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'homes', component: HomeListComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'activate/:token', component: ActivateComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
