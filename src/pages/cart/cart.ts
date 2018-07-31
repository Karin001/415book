import { Component,ViewChild,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,ionc } from 'ionic-angular';
import { BookPage } from '../book/book';
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
   {bookid:'1',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:0,price:12.5},
   {bookid:'2',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:0,price:16.5},
   {bookid:'3',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:0,price:11.6},
   {bookid:'4',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:0,price:12.5},
   {bookid:'5',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:1,price:16.5},
   {bookid:'6',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:0,price:11.6},
   {bookid:'7',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:0,price:12.5},
   {bookid:'8',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:0,price:16.5},
   {bookid:'9',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:0,price:11.6},
   {bookid:'10',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book4.jpg',nums:0,price:12.5},
   {bookid:'11',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book5.jpg',nums:1,price:16.5},
   {bookid:'12',name:'好书一本',author:'高手',imgSrc:'assets/imgs/book3.jpg',nums:0,price:11.6},

 ];
 @ViewChild('content') content;
 showToTop=false;
 get allPrice(){
   let nothing = true;
   let sum = 0;
   this.cartGoods.forEach(ele => {
    if(ele.nums > 0 ){
      nothing = false;
    }
    if(ele['selected']){
      sum = sum + (ele.price*1000 * ele.nums);
    }
  })
  sum = sum/1000;
  return {sum,nothing};
 }
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  toBookPage(item){
    const book = {name:item.name,author:item.author,src:item['imgSrc']}
    console.log(book)
    this.navCtrl.push(BookPage,{book})
  }


  allChange(checked){
    this.cartGoods.forEach(ele => {
      if(ele.nums>0) {
        ele['selected'] = checked;
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

}
