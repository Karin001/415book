import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import {AuthProvider} from '../providers/auth/auth';
import {catchError} from 'rxjs/operators/catchError';
import { retry } from 'rxjs/operators/retry';
import {of} from 'rxjs/observable/of'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage:Storage , public auth:AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.get('remenberMe').then(payload=>{
        if(!payload) {
          this.auth.logged.next(false);
          return;
        }
        this.auth.logInCheck(payload).subscribe(
          (val) => {
            if(!val){
              this.auth.logged.next(false);
              console.log('过期',val);
            } else{
              this.auth.logged.next(true);
              console.log('未过期',val);
            }
          }
        )
      }).catch(()=>{
        this.auth.logged.next(false);
        console.log('rem3');
      })
    });
  }
}
