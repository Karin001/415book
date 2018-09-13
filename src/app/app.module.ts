import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {AppState,BookDetailState,BookTypeState} from './state/app.state'
import { AuthState} from './state/auth/auth.state'
import { MyApp } from './app.component';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { Platform } from 'ionic-angular';
import { NG_VALIDATORS} from '@angular/forms'
import { MyvalidatorDirective } from '../directives/myvalidator/myvalidator';
import { CartPageModule } from '../pages/cart/cart.module'
import {ComponentsModule} from '../components/components.module'

import { DirectivesModule } from '../directives/directives.module';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
//import { SignUpPage } from '../pages/sign-up/sign-up';
import { LogInPage } from '../pages/log-in/log-in';
import { BookPage } from '../pages/book/book';
//import {MuluPage} from '../pages/mulu/mulu';
import { CartPage } from '../pages/cart/cart';

import { UserPage } from '../pages/user/user';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { AuthProvider } from '../providers/auth/auth.service';
import { BookService } from '../providers/book/book.service';
import { messageService } from '../providers/message/message.service';
import {httpInterceptorProviders} from '../providers/interceptor/index'
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,

    HomePage,
    TabsPage,
   
    UserPage,
 
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PipesModule,
    CartPageModule,
    
    IonicStorageModule.forRoot(),
    DirectivesModule,
    HttpClientModule,
    NativeHttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      iconMode: 'ios',
      monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      monthShortNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    }),
    NgxsModule.forRoot([AppState,BookDetailState,BookTypeState,AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    //SignUpPage,
    //LogInPage,
    UserPage,
    //BookPage,
    HomePage,
    //MuluPage,
    //CartPage,
    TabsPage,
    //FukuanPage,
    //CheckOrderPage,
    //EditRemovePage,
    //PostAddrPage,
    //EditPostPage,
   // CityPickerPage,
   // SearchPage,
   // UserSettingPage,
   // BookTypePage,
   // OrderlistPage,
   // OrderDetailPage,
   // BillDetailPage,
   // UserInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    RestApiProvider,
    AuthProvider,
    httpInterceptorProviders,
    messageService,
    BookService
  ]
})
export class AppModule {}
