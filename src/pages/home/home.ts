import { Component,ElementRef,ViewChild,Renderer2,NgZone } from '@angular/core';
import { NavController,ScrollEvent } from 'ionic-angular';
import { BookPage } from '../book/book';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('header') header:ElementRef;
  bannerImgs = [1, 2, 3]
  sw;
  haha=1;
  icontypes = [
    {icon_name:'sports',name:'运动'},
    {icon_name:'eng',name:'外文'},
    {icon_name:'child',name:'儿童'},
    {icon_name:'bungaku',name:'文学'},
    {icon_name:'gijuzu',name:'艺术'},
    {icon_name:'skill',name:'科技'},
    {icon_name:'history',name:'历史'},
    {icon_name:'shakai',name:'社会'},
  ]
  typeLists = [
    {
      typeName: "hot", books: [
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
    {
      typeName: "new", books: [
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
    {
      typeName: "文学", books: [
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
    {
      typeName: "历史", books: [
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
    {
      typeName: "外语", books: [
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
  ]
  op = `rgba(255,255,255,0)`;
  constructor(public navCtrl: NavController,public renderer: Renderer2, public zone:NgZone) {

  }
  toBookPage(book){
    this.navCtrl.push(BookPage,{book});
  }
  toCartPage(){
    this.navCtrl.push(CartPage);
  }
  hhahaScroll(event:ScrollEvent){
    console.log(this.header);
    if(event.scrollTop>=160) {
      this.op = `rgba(255,255,255,1)`;
      this.sw = true;
      console.log(this.op);
      this.renderer.setStyle(this.header.nativeElement,'background',this.op);
    } else{
      this.sw = false;
      const op = Math.floor(event.scrollTop/160 * 100)/100
      this.op = `rgba(255,255,255,${op})`;
      this.renderer.setStyle(this.header.nativeElement,'background',this.op);
      console.log(this.op);
    }
    this.zone.run(()=>{
      this.sw = !!this.sw;

    })

  }
}
