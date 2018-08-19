import { Component,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
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

  form = {
    name:'',
    phone:'',
    fromModalData:'',
    xiangxidizhi:'',
    asDefaultPost:false
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alerCtrl:AlertController,
    public cdr:ChangeDetectorRef
  ) {

    this.title = this.navParams.get('post')?'编辑收货地址':'新建收货地址';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }
  openCityPicker(){
    const modal = this.modalCtrl.create(CityPickerPage,{data:this.form.fromModalData},{cssClass:'cos'});
    console.log('frpmdata',this.form.fromModalData);
    modal.present();
    modal.onDidDismiss(data => {
      this.form.fromModalData = data.join(' ');
      this.cdr.detectChanges();

    })
  }
  doAlert(message) {
    let alert = this.alerCtrl.create({
      title: '请确认',
      message: message,
      buttons: ['Ok']
    });
    alert.present()
  }
  handleSubmit(modelList:any[]){
    console.log(modelList);
    const errors = modelList.filter(ele => ele.invalid).map(ele => ele.errors);
    if(errors.length === 0){
      console.log(errors,'success')
    } else{
      console.log(errors,'wrong');
      console.log()
      const message = errors.map((ele,index) =>index+1+': ' + ele.message+'; ').join('');
      this.doAlert(message);
    }
  }
}
