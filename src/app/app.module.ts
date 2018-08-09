import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { Platform } from 'ionic-angular';
import { NG_VALIDATORS} from '@angular/forms'
import { MyvalidatorDirective } from '../directives/myvalidator/myvalidator';

import {ComponentsModule} from '../components/components.module'

import { DirectivesModule } from '../directives/directives.module';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { BookPage } from '../pages/book/book';
import {MuluPage} from '../pages/mulu/mulu';
import { CartPage } from '../pages/cart/cart';
import { EditRemovePage } from '../pages/cart/modal-page/editRemove';
import { FukuanPage } from '../pages/fukuan/fukuan';
import { CheckOrderPage } from '../pages/check-order/check-order';
import { PostAddrPage } from '../pages/post-addr/post-addr';
import { EditPostPage } from '../pages/edit-post/edit-post';
import { CityPickerPage } from '../pages/city-picker/city-picker';
import { BookTypePage } from '../pages/book-type/book-type';
import { UserPage } from '../pages/user/user';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookPage,
    MuluPage,
    CartPage,
    FukuanPage,
    CheckOrderPage,
    EditRemovePage,
    PostAddrPage,
    EditPostPage,
    BookTypePage,
    CityPickerPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    DirectivesModule,
    HttpClientModule,
    NativeHttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      iconMode: 'ios',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    UserPage,
    BookPage,HomePage,
    MuluPage,
    CartPage,
    TabsPage,
    FukuanPage,
    CheckOrderPage,
    EditRemovePage,
    PostAddrPage,
    EditPostPage,
    CityPickerPage,
    BookTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    RestApiProvider
  ]
})
export class AppModule {}
