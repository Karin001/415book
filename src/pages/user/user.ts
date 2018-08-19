import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import { SignUpPage } from '../sign-up/sign-up';
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
  history;
  logged$: Observable<{ username: string;payload?:string }|boolean>;
  username$: Observable<string>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider,
    public storage: Storage,
    public auth: AuthProvider
  ) {
    this.restApi.getHistoryBooks((list) => {
      this.history = list;
    })
    this.logged$ = this.auth.watchLogged();
    this.username$ = this.logged$.pipe(map(val=>val['username']));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');

  }
  toSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

}
