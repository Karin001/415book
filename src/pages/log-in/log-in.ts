import { Component, ChangeDetectorRef } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController,
  LoadingController,
  ToastController
} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth.service';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Store,Select} from '@ngxs/store'
import { AuthState } from '../../app/state/auth/auth.state'
import { LogIn,RequestPhoneCode,ResetPW } from '../../app/state/auth/auth.action'
import { LogInRequstBodyModel, PhoneAuthRequestBodyModel, ResetPWRequestBodyModel } from '../../providers/auth/auth.service.model';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  form = {
    phone: '',
    password: '',
  }
  form_ura = {
    phoneAuthCode: '',
    password:'',
  }

  toast;
  codeCheckOk = false;
  
  @Select(AuthState.codeButtonDisabled) codeButtonDisabled$:Observable<boolean>
  @Select(AuthState.codeButtonName) codeButtonName$:Observable<string>
  @Select(AuthState.sendPhoneCode) sendPhoneCode$:Observable<number>
  timeCount = null;
  message = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController,
    public change: ChangeDetectorRef,
    public toastCtrl: ToastController,
    public store:Store

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  show(phone) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    const phoneAuthRequestBody:PhoneAuthRequestBodyModel = {phone}
    this.store.dispatch(new RequestPhoneCode(phoneAuthRequestBody)).subscribe(()=>{
      loading.dismiss()
    })
    
  }
  restValidCheck(ps: string) {
    console.log(ps.length);
    if (ps.length < 8) {
      return false;
    }
    if (ps.length > 20) {
      return false;
    }
    const kkk = new Promise(res => { setTimeout(() => { console.log('32313123sddgs'); res() }, 3000) })

    return true;
  }
  resetPW({ps_ura,phone,code}) {
    if(ps_ura.valid && phone.valid && code.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      const resetPWRequestBody:ResetPWRequestBodyModel = {
        phone:this.form.phone,
        password:this.form_ura.password,
        phoneAuthCode:this.form_ura.phoneAuthCode
      }
      this.store.dispatch(new ResetPW(resetPWRequestBody)).subscribe(()=>{
        loading.dismiss()
      })
      // this.auth.resetPW({phone:this.form_ura.phone,code:this.form_ura.phoneAuthCode,password:this.form_ura.password}).subscribe(val => {
      //   if(val) {
      //     loading.dismiss();
      //     this.presentToast('验证成功，密码已重置!')
      //     this.toast.onDidDismiss(()=>{this.navCtrl.push(TabsPage,{index:2})});
      //     this.toast.present();
      //   } else{
      //     loading.dismiss();
      //     this.presentToast('验证码错误!')
      //     this.toast.onDidDismiss(()=>{});
      //     this.toast.present();
      //   }
      // })
    }
  }
  presentToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 1000
    });
  }
 
  logIn({ phone, ps }) {
    if (phone.valid && ps.valid) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      const loginRequestBody:LogInRequstBodyModel = this.form
     this.store.dispatch(new LogIn(loginRequestBody)).subscribe(()=>{
       loading.dismiss()
     })
    }
  }


}
