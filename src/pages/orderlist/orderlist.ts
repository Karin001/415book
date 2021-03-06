import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { OrderDetailPage } from '../order-detail/order-detail';
/**
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderlist',
  templateUrl: 'orderlist.html',
})
export class OrderlistPage {
  orderState = "all";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderlistPage');
  }
  toOrderDetailPage(){
    this.navCtrl.push('OrderDetailPage');
  }

}
