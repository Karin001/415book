import { Component, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController,LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
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
    id:'',
    password:'',
    phoneCode:''
  }
  
  showReset = false;
  timeCount = null;
  message = "";
  codeButtonDisabled= false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController,
    public change:ChangeDetectorRef

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  show() {
    this.codeButtonDisabled = true;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
   
    this.auth.getPhoneCode({code:12221211})
    .subscribe(data => {
      if(data){
        this.message = `秒后可再次申请验证码`;
        this.timeCount = 3;
        loading.dismiss();
       const kk =  setInterval(()=>{
        if(this.timeCount === 0){
          window.clearInterval(kk);
          this.timeCount = null;
          this.message = '';
          this.codeButtonDisabled = false;
          return;
        }
        this.timeCount--;
       

        },1000)
      } else{
        this.message = '网络故障！点击再次获取！'
        this.codeButtonDisabled =false;
        loading.dismiss();
      }
    })
    this.showReset = true;
  }
  restValidCheck(ps: string) {
    console.log(ps.length);
    if (ps.length < 8) {
      return false;
    }
    if (ps.length > 20) {
      return false;
    }
    const kkk = new Promise(res=>{setTimeout(()=>{console.log('32313123sddgs');res()},3000)})
 
    return true;
  }
   codeCheck(){

  }



}
