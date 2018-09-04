import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {AppState} from './state/app.state'
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
//import { EditRemovePage } from '../pages/cart/modal-page/editRemove';
//import { FukuanPage } from '../pages/fukuan/fukuan';
//import { CheckOrderPage } from '../pages/check-order/check-order';
//import { PostAddrPage } from '../pages/post-addr/post-addr';
//import { EditPostPage } from '../pages/edit-post/edit-post';
//import { CityPickerPage } from '../pages/city-picker/city-picker';
//import { BookTypePage } from '../pages/book-type/book-type';
import { UserPage } from '../pages/user/user';
//import { SearchPage } from '../pages/search/search';
//import { UserSettingPage } from '../pages/user-setting/user-setting';
//import { OrderlistPage } from '../pages/orderlist/orderlist';
//import { OrderDetailPage } from '../pages/order-detail/order-detail';
//import { BillDetailPage } from '../pages/bill-detail/bill-detail';
//import { UserInfoPage } from '../pages/user-info/user-info';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { AuthProvider } from '../providers/auth/auth';
import { BookService } from '../providers/book/book.service';
import {httpInterceptorProviders} from '../providers/interceptor/index'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    //SignUpPage,
    //LogInPage,
    HomePage,
    TabsPage,
   // BookPage,
   // MuluPage,
    //CartPage,
    //FukuanPage,
    //CheckOrderPage,
    //EditRemovePage,
    //PostAddrPage,
    //EditPostPage,
    //BookTypePage,
   // CityPickerPage,
   // SearchPage,
    UserPage,
   // UserSettingPage,
    //OrderlistPage,
    //OrderDetailPage,
   // BillDetailPage,
   // UserInfoPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CartPageModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    IonicStorageModule.forRoot(),
    DirectivesModule,
    HttpClientModule,
    NativeHttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      iconMode: 'ios',
      monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      monthShortNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    })
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
    BookService
  ]
})
export class AppModule {}
