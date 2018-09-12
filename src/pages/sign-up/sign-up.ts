import { Component } from '@angular/core';
import { SignUpRequesetBodyModel, PhoneAuthResponseBodyModel, PhoneAuthRequestBodyModel } from '../../providers/auth/auth.service.model'
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  ToastController
} from 'ionic-angular';
//import { LogInPage } from '../log-in/log-in';
import { AuthProvider } from '../../providers/auth/auth.service';
import { Store, Select } from '@ngxs/store'
import { AuthState } from '../../app/state/auth/auth.state'
import { RequestPhoneCode, SignUp } from '../../app/state/auth/auth.action'
import { Observable } from 'rxjs';
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
  bgsrc = "../assets/imgs/loginBG.jpg";
  message = '';
  codeButtonDisabled = false;
  @Select(AuthState.codeButtonName) codeButtonName$: Observable<string>
  @Select(AuthState.codeButtonDisabled) codeButtonDisabled$: Observable<boolean>
  @Select(AuthState.sendPhoneCode) sendPhoneCode$: Observable<number>
  @Select(AuthState.logged) logged$: Observable<boolean>
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public store: Store
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  // toLogIn() {
  //   const modal = this.modalCtrl.create('LogInPage', {}, { cssClass: 'cos' });
  //   modal.present();
  // }
  getCode() {
    const phoneAuthReqbody: PhoneAuthRequestBodyModel = {
      phone: this.form.phone
    }
    this.store.dispatch(new RequestPhoneCode(phoneAuthReqbody))
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
  back() {
    this.navCtrl.pop();
  }
  submit({ phone, ps, code }) {
    if (phone.valid && ps.valid && code.valid) {
      console.log(this.form);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      const SignUpRequesetBody: SignUpRequesetBodyModel = this.form
      loading.present();
      this.store.dispatch(new SignUp(SignUpRequesetBody)).subscribe(() => {
        loading.dismiss()
      })

      this.logged$.subscribe((logged) => {
        if (logged) {
          this.navCtrl.pop()
        }
      })
    } else {
      return
    }
  }
}
