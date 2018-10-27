import { Component} from '@angular/core';
import {
  ViewController,
  NavParams,
  AlertController,
  LoadingController
} from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editRemove',
  templateUrl: 'editRemove.html',
})
export class EditRemovePage {
  removeBooks;
  dontRemoveCnt = 0;
  constructor(
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.removeBooks = this.navParams.get('removeBooks')
    this.removeBooks.forEach(element => {
      element.dontRemove = false;
      element.hide = false;
    });
    console.log(this.removeBooks);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
 doMore() {
   let _dontRemoveCnt=0;
   this.removeBooks.forEach(element => {
      if(element.dontRemove){
        _dontRemoveCnt++;
      }
   });

   this.dontRemoveCnt = _dontRemoveCnt;
 }
 presentLoading() {
  const loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 3000
  });
  loader.present();
}
 remove(){
   if(this.dontRemoveCnt === this.removeBooks.length) {
    let confirm = this.alertCtrl.create({
      message: '您啥也没有选中 :)',

    });
    confirm.present()
   }
   this.presentLoading();
   const temp = this.removeBooks.filter(ele=>!ele.dontRemove);

   temp.forEach(ele => {
     ele.hide = true;
   })

  console.log('temp',temp);
 }
}
