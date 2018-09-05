import { Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';
@Injectable()
export class messageService {
    constructor(
        public toastCtrl: ToastController
    ){}
    presentToast(message:string,duration:number) {
        const toast = this.toastCtrl.create({
          message: message,
          duration: duration
        });
        toast.present();
      }
}