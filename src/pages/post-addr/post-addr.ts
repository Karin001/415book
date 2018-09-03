import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { EditPostPage } from '../edit-post/edit-post';
//import {CityPickerPage} from '../city-picker/city-picker';
//import { FukuanPage } from '../fukuan/fukuan';
/**
 * Generated class for the PostAddrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-addr',
  templateUrl: 'post-addr.html',
})
export class PostAddrPage {
  addrs = {
    default:{postId:0,name:'陈天华',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区3栋'},
    list:[
      {postId:0,name:'陈天华',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区3栋'},
    {postId:1,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区4栋'},
    {postId:2,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区5栋'},
    {postId:3,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区6栋'},
    {postId:4,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区7栋'},
    {postId:5,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区8栋'},
    {postId:6,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区11栋'},
    {postId:7,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区12栋'},
    {postId:8,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区13栋'},
    {postId:9,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区14栋'},
    {postId:10,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区15栋'},
    {postId:11,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区16栋'},
    {postId:12,name:'高凯明',phone:'134*****384',addr:'成都市武侯区南三环立交桥附近小区17栋'},
  ]
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostAddrPage');
  }
  toEditPage(post){
    this.navCtrl.push('EditPostPage',{post});
  }

  toEditPage2(post){
    this.navCtrl.push('FukuanPage');
  }
}
