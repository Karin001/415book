import { Component, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { NavController, ScrollEvent } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { BookPage } from '../book/book';
import { CartPage } from '../cart/cart';
import { BookTypePage } from '../book-type/book-type';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('header') header: ElementRef;
  bannerImgs = [`url("assets/imgs/banner.jpg")`, `url("assets/imgs/banner.jpg")`, `url("assets/imgs/banner.jpg")`]
  sw;
  haha = 1;
  youMayLike;
  icontypes = [
    { icon_name: 'sports', name: '运动' },
    { icon_name: 'eng', name: '外文' },
    { icon_name: 'child', name: '儿童' },
    { icon_name: 'bungaku', name: '文学' },
    { icon_name: 'gijuzu', name: '艺术' },
    { icon_name: 'skill', name: '科技' },
    { icon_name: 'history', name: '历史' },
    { icon_name: 'shakai', name: '社会' },
  ]
  typeLists;
  op = `rgba(255,255,255,0)`;
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer2,
    public zone: NgZone,
    public restApi: RestApiProvider
  ) {
    this.restApi.getIndexBookList((list)=>{this.typeLists = list; console.log('hiahiahia',this.typeLists)});
   



  }
  toBookPage(book) {
    this.navCtrl.push(BookPage, { book });
  }
  toCartPage() {
    this.navCtrl.push(CartPage);
  }
  toBookTypePage(type) {
    this.navCtrl.push(BookTypePage,{typeTitle:type})
  }
  hhahaScroll(event: ScrollEvent) {

    if (event.scrollTop >= 160) {
      this.op = `rgba(255,255,255,1)`;
      this.sw = true;

      this.renderer.setStyle(this.header.nativeElement, 'background', this.op);
    } else {
      this.sw = false;
      const op = Math.floor(event.scrollTop / 160 * 100) / 100
      this.op = `rgba(255,255,255,${op})`;
      this.renderer.setStyle(this.header.nativeElement, 'background', this.op);

    }
    this.zone.run(() => {
      this.sw = !!this.sw;

    })

  }
  
}
