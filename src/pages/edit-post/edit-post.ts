import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {
  title;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('post')?'编辑收货地址':'新建收货地址';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }

}
