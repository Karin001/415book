import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the MuluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mulu',
  templateUrl: 'mulu.html',
})
export class MuluPage {
  mulu;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.mulu = this.navParams.get("mulu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuluPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
