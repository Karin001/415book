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
import { AuthProvider } from '../../providers/auth/auth';
import { UserPage } from '../user/user';
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
    phone:''
  }

  toast;
  codeCheckOk = false;
  showReset = false;
  timeCount = null;
  message = "";
  codeButtonDisabled = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController,
    public change: ChangeDetectorRef,
    public toastCtrl: ToastController

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  show(phone) {
    this.codeButtonDisabled = true;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.auth.getPhoneCode({ phone })
      .subscribe(data => {
        if (data) {
          console.log('phone',phone);
          this.showReset = true;
         
          this.form_ura.phone = phone;
          this.message = `秒后可重新获取`;
          this.timeCount = 3;
          loading.dismiss();
          const kk = setInterval(() => {
            if (this.timeCount === 0) {
              window.clearInterval(kk);
              this.timeCount = null;
              this.message = '';
              this.codeButtonDisabled = false;
              return;
            }
            this.timeCount--;


          }, 1000)
        } else {
          this.message = '网络故障！'
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
  resetPW(code) {
    if(code.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      this.auth.resetPW({phone:this.form_ura.phone,code:this.form_ura.phoneAuthCode,password:this.form_ura.password}).subscribe(val => {
        if(val) {
          loading.dismiss();
          this.presentToast('验证成功，密码已重置!')
          this.toast.onDidDismiss(()=>{this.navCtrl.push(UserPage)});
          this.toast.present();
        } else{
          loading.dismiss();
          this.presentToast('验证码错误!')
          this.toast.onDidDismiss(()=>{});
          this.toast.present();
        }
      })
    }
  }
  presentToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
  }
 
  logIn({ phone, ps }) {
    if (phone.valid && ps.valid) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      this.auth.logIn(this.form).subscribe(val => {
        if (val.success) {
          loading.dismiss();
          this.presentToast('登录成功！')
          this.toast.onDidDismiss(() => {
            this.navCtrl.push(UserPage);
          });
          this.toast.present();
        } else {
          loading.dismiss();
          this.presentToast(`登录失败！${val.payload}`);
          this.toast.onDidDismiss(()=>{});
          this.toast.present();
        }
      })
    }
  }


}
