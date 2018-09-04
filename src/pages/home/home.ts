import { Component, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { NavController, ScrollEvent } from 'ionic-angular';
import {Store,Select} from '@ngxs/store';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { BookPage } from '../book/book';
import { CartPage } from '../cart/cart';
import { AppState } from '../../app/state/app.state';
import { IndexStateModel } from '../../app/state/app.stateModel';
import { BookClick } from '../../app/state/app.action'
import { Observable } from 'rxjs';
//import { BookTypePage } from '../book-type/book-type';
//import { SearchPage } from '../search/search';
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
  @Select(AppState.bookList) indexData$:Observable<any>;
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer2,
    public zone: NgZone,
    public restApi: RestApiProvider,
    public store: Store
  ) {

    this.indexData$.subscribe(data => console.log('datalist',data));



  }
  toBookPage(book) {
    this.store.dispatch(new BookClick('1'));
    this.navCtrl.push('BookPage', { book });
  }
  toCartPage() {
    this.navCtrl.push(CartPage);
  }
  toBookTypePage(type) {

    this.navCtrl.push('BookTypePage',{typeTitle:type})
  }
  toSearchPage() {
    this.navCtrl.push('SearchPage')
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
