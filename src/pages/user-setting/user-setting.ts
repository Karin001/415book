import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSettingPage');
  }
  toUserInfoPage(){
    this.navCtrl.push('UserInfoPage');
  }
}
