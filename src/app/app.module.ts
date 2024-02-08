
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { CacheInterceptor } from './caching/core/cache.interceptor';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
// import {  MessageService } from 'primeng/api';



@NgModule({
  providers: [

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CacheInterceptor,
    //   multi: true
    // }
  ],
  declarations: [AppComponent, LoginComponent, VendorLoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule,
    DropdownModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    FormsModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
    }),
    NgbModule,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log("App Module")
  }
}
