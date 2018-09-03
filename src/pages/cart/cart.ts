import { Component,ViewChild,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
//import { BookPage } from '../book/book';
//import { CheckOrderPage } from '../check-order/check-order';
//import { EditRemovePage } from './modal-page/editRemove';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const goods = []
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
 cartGoods = [
   {bookid:'1',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:1,price:12.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'2',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:1,price:16.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'3',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:1,price:11.6,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'4',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:1,price:12.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'5',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:1,price:16.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'6',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:1,price:11.6,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'7',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:1,price:12.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'8',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:1,price:16.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'9',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:1,price:11.6,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'10',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:2,price:12.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'11',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:1,price:16.5,publisher:'某某某某某某某出版社',version:'2014年第一版'},
   {bookid:'12',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:0,price:11.6,publisher:'某某某某某某某出版社',version:'2014年第一版'},

 ];
 mayNotWantBooks;
 @ViewChild('content') content;
 showToTop=false;
 get allPrice(){
   this.mayNotWantBooks = [];
   let nothing = true;
   let sum = 0;
   let selectedBooks = [];
   this.cartGoods.forEach(ele => {
    if(ele.nums > 0 ){
      nothing = false;
    } else{
      this.mayNotWantBooks.push(ele)
    }
    if(ele['selected']){
      selectedBooks.push(ele);
      sum = sum + (ele.price*1000 * ele.nums);
    }
  })
  sum = sum/1000;
  return {sum,nothing,selectedBooks};
 }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public zone:NgZone
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  toBookPage(item){
    const book = {name:item.name,author:item.author,imgSrc:item['imgSrc']}
    console.log(book)
    this.navCtrl.push('BookPage',{book})
  }


  allChange(checkedState){
    this.cartGoods.forEach(ele => {
      if(ele.nums>0) {
        ele['selected'] = checkedState;
      }
    })
  }
  hhahaScroll(event){

    this.zone.run(()=>{
      if(event.scrollTop>=200){
        this.showToTop = true;
      } else{
        this.showToTop = false;
      }
    })

  }
  toTop(){
    this.content.scrollTo(0);
  }
  toCheckOrderPage(){
    this.navCtrl.push('CheckOrderPage', {orderList:this.cartGoods})
  }
  openAlert(){
    let message;
    let buttons;
    if(this.mayNotWantBooks.length>0){
      message = `您将从购物车清扫${this.mayNotWantBooks.length}款图书商品哦！`;
      buttons = [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '详情',
          handler: () => {
            const modal = this.modalCtrl.create('EditRemovePage',{removeBooks:this.mayNotWantBooks});
            console.log(this.mayNotWantBooks);
            modal.present();

          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    } else {
      message = '您没有需要清扫出去的图书哦！';
      buttons = ['取消']
    }
    let confirm = this.alertCtrl.create({
      title: '清扫小助手对您说：',
      message,
      buttons

    });
    confirm.present()
  }

}
