import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';
import { MuluPage } from '../mulu/mulu';
/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const mulu = [
  '第1回：宴桃园豪杰三结义 斩黄巾英雄首立功',
  '第2回：张翼德怒鞭督邮 何国舅谋诛宦竖',
  '第3回：议温明董卓叱丁原 馈金珠李肃说吕布',
  '第4回：废汉帝陈留践位 谋董贼孟德献刀',
  '第5回：发矫诏诸镇应曹公 破关兵三英战吕布',
  '第6回：焚金阙董卓行凶 匿玉玺孙坚背约',
  '第7回：袁绍磐河战公孙 孙坚跨江击刘表',
  '第8回：王司徒巧使连环计 董太师大闹凤仪亭',
  '第9回：除暴凶吕布助司徒 犯长安李傕听贾诩',
  '第10回：勤王室马腾举义 报父仇曹操兴师',
  '第11回：刘皇叔北海救孔融 吕温侯濮阳破曹操',
  '第12回：陶恭祖三让徐州 曹孟德大战吕布',
  '第13回：李傕郭汜大交兵 杨奉董承双救驾',
  '第14回：曹孟德移驾幸许都 吕奉先乘夜袭徐郡',
  '第15回：太史慈酣斗小霸王 孙伯符大战严白虎',
  '第16回：吕奉先射戟辕门 曹孟德败师淯水',
  '第17回：袁公路大起七军 曹孟德会合三将',
 '第18回：贾文和料敌决胜 夏侯惇拔矢啖睛',
  '第19回：下邳城曹操鏖兵 白门楼吕布殒命',
  '第20回：曹阿瞒许田打围 董国舅内阁受诏',
  '第21回：曹操煮酒论英雄 关公赚城斩车胄'
]

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  book;
  @ViewChild('box') box1:ElementRef;
  @ViewChild('con') con1:ElementRef;
  moreShow=false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
   this.book = this.navParams.get('book');
   console.log('bookpage',this.book);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
    if(this.box1.nativeElement.scrollHeight<=this.con1.nativeElement.scrollHeight){
      this.moreShow = true;
    }
  }
  toMuluPage(){
    //this.navCtrl.push(MuluPage, {mulu})
    const modal = this.modalCtrl.create(MuluPage,{mulu});
    modal.present();
  }
}
