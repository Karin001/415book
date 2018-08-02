import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostAddrPage } from '../post-addr/post-addr';
/**
 * Generated class for the CheckOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-order',
  templateUrl: 'check-order.html',
})
export class CheckOrderPage {
  orderList = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     ) {
    this.orderList = this.navParams.get('orderList');
    console.log('orderList',this.orderList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOrderPage');
  }
  changePost(){
    this.navCtrl.push(PostAddrPage);
  }

}
