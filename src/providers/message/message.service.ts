import { Injectable } from '@angular/core';
import {ToastController,LoadingController,Loading} from 'ionic-angular';
@Injectable()
export class messageService {
    loading:Loading;
    constructor(
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
    ){}
    presentToast(message:string,duration:number) {
        const toast = this.toastCtrl.create({
          message: message,
          duration: duration
        });
        toast.present();
      }
    presentLoading(message:string){
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        this.loading.present();
    }
    dismissLoading(){
        this.loading.dismiss()
    }
}