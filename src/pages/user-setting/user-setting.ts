import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store, Select } from '@ngxs/store' 
import { AuthState } from '../../app/state/auth/auth.state'
import { LogOut } from '../../app/state/auth/auth.action'
import { Observable } from 'rxjs/observable'
//import { UserInfoPage } from '../user-info/user-info';
/**
 * Generated class for the UserSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-setting',
  templateUrl: 'user-setting.html',
})
export class UserSettingPage {
  @Select(AuthState.logged) logged$:Observable<boolean>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public store: Store
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSettingPage');
  }
  toUserInfoPage(){
    this.navCtrl.push('UserInfoPage');
  }
  logOut(){
    this.store.dispatch(new LogOut()).subscribe(()=>{
      this.navCtrl.pop()
    })
    
  }
}
