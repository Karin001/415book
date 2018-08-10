import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Storage } from '@ionic/storage';
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider,
    public storage: Storage
  ) {
    this.restApi.getHistoryBooks((list) => {
      this.history = list;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }


}
