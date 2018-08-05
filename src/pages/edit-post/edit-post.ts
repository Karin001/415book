import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { CityPickerPage } from '../city-picker/city-picker';
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
  fromModalData = '';
  form = {
    name:'',
    phone:'',

  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.title = this.navParams.get('post')?'编辑收货地址':'新建收货地址';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }
  openCityPicker(){
    const modal = this.modalCtrl.create(CityPickerPage,{data:this.fromModalData},{cssClass:'cos'});
    console.log('frpmdata',this.fromModalData);
    modal.present();
    modal.onDidDismiss(data => {
      this.fromModalData = data.join(' ');
    })
  }
  handleSubmit(shouhuoren){
    console.log(shouhuoren);
  }
}
