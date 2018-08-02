import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
    EditPostPage
  ],
  imports: [
    BrowserModule,
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
    HomePage,
    BookPage,
    MuluPage,
    CartPage,
    TabsPage,
    FukuanPage,
    CheckOrderPage,
    EditRemovePage,
    PostAddrPage,
    EditPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
