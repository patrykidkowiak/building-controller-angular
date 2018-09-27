import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CookieService} from 'ngx-cookie-service';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import {ErrorComponent} from './error/error.component';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './authentication/register/register.component';
import {LoginComponent} from './authentication/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './authentication/auth.service';
import {AuthGuard} from './authentication/auth.guard';
import {ActivateComponent} from './authentication/activate/activate.component';
import {UserComponent} from './user/user.component';
import {HomeListComponent} from './home/home-list/home-list.component';
import {HomeCreateComponent} from './home/home-create/home-create.component';
import {RoomListComponent} from './home/room/room-list/room-list.component';
import {RoomCreateComponent} from './home/room/room-create/room-create.component';
import {BulbListComponent} from './home/room/bulb/bulb-list/bulb-list.component';
import {BulbCreateComponent} from './home/room/bulb/bulb-create/bulb-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ErrorComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    ActivateComponent,
    UserComponent,
    HomeListComponent,
    HomeCreateComponent,
    RoomListComponent,
    RoomCreateComponent,
    BulbListComponent,
    BulbCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
