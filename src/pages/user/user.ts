import { Component,Renderer2,ViewChild,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ScrollEvent } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
//import { SignUpPage } from '../sign-up/sign-up';
//import { UserSettingPage } from '../user-setting/user-setting';
//import { OrderlistPage } from '../orderlist/orderlist';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  @ViewChild('uraHeader')header;
  op = 'none';
  sw;
  hideUra = false;
  hideUraHandle;
  history;
  logged$: Observable<{ username: string;payload?:string }|boolean>;
  username$: Observable<string>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider,
    public storage: Storage,
    public auth: AuthProvider,
    public change:ChangeDetectorRef
  ) {
    this.restApi.getHistoryBooks((list) => {
      this.history = list.historyBooks;
      console.log('list',list)
    })
    this.logged$ = this.auth.watchLogged();
    this.username$ = this.logged$.pipe(map(val=>val['username']));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');

  }
  toSignUpPage(){
    this.navCtrl.push('SignUpPage');
  }
  toUserSettingPage(){
    this.navCtrl.push('UserSettingPage');
  }
  toOrderlistPage(){
    this.navCtrl.push('OrderlistPage');
  }
  hhahaScroll(event: ScrollEvent) {
    if(this.hideUraHandle){
      window.clearTimeout(this.hideUraHandle);
    }
    this.hideUra = false;
    if (event.scrollTop >= 130) {
      this.op = `rgba(255,255,255,1)`;
      this.sw = true;
      this.hideUraHandle = setTimeout(()=>{this.hideUra = true;this.change.detectChanges();console.log('hideura',this.hideUra)},2000);
      this.change.detectChanges();
      //this.renderer.setStyle(this.header.nativeElement, 'background', this.op);
    } else {
      this.sw = false;
      const op = Math.floor(event.scrollTop / 130 * 100) / 100
      this.op = `rgba(255,255,255,${op})`;
      //this.renderer.setStyle(this.header.nativeElement, 'background', this.op);
      this.change.detectChanges();
    }
    // this.zone.run(() => {
    //   this.sw = !!this.sw;

    // })

  }

}
