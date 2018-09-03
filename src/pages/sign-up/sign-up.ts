import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  ToastController
} from 'ionic-angular';
//import { LogInPage } from '../log-in/log-in';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  form = {
    phone: '',
    phoneAuthCode: '',
    password: ''
  }
  bgsrc="../assets/imgs/loginBG.jpg";
  message = '';
  codeButtonDisabled = false;
  codeButtonName = '获取验证码';
  timeCount;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  toLogIn() {
    const modal = this.modalCtrl.create('LogInPage', {}, { cssClass: 'cos' });
    modal.present();
  }
  getCode() {
    this.codeButtonDisabled = true;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.auth.getPhoneCode({ phone: 12221211 })
      .subscribe(data => {
        if (data) {
          this.codeButtonName = "60秒后，可重新获取";
          this.message = `秒`;
          this.timeCount = 60;
          loading.dismiss();
          const kk = setInterval(() => {
            if (this.timeCount === 0) {
              window.clearInterval(kk);
              this.timeCount = null;
              this.message = '';
              this.codeButtonDisabled = false;
              this.codeButtonName = `获取验证码`
              return;
            }
            this.timeCount--;
            this.codeButtonName = `${this.timeCount}秒后可重新获取`

          }, 1000)
        } else {
          this.message = '网络故障！'
          this.codeButtonName = "网络故障，请重试"
          this.codeButtonDisabled = false;
          loading.dismiss();
        }
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
  presentToast() {
    const toast = this.toastCtrl.create({
      message: '注册成功！',
      duration: 3000
    });
    toast.onDidDismiss(() => {
      this.navCtrl.push(HomePage);
    });
    toast.present();
  }
  back(){
    this.navCtrl.pop();
  }
  submit({ phone, ps, code }) {
    if (phone.valid && ps.valid && code.valid) {
      console.log(this.form);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

      this.auth.signUp(this.form).subscribe(val => {
        if (val.success) {
          loading.dismiss();
          this.presentToast();
        } else {
          loading.dismiss();
        }
      });
    } else {
      return
    }
  }
}
