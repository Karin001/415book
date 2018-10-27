import { Component, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { NavController, ScrollEvent } from 'ionic-angular';
import {Store,Select} from '@ngxs/store';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

import { CartPage } from '../cart/cart';
import { AppState } from '../../app/state/app.state';

import { BookClick,LoadBookType } from '../../app/state/app.action'
import { Observable } from 'rxjs';
import {storageNames} from '../../config'
import {Options,BookDetailRequestBodyModel,BookTypeListRequestBodyModel} from '../../providers/book/book.service.model'
import {typeNames} from '../../config'
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
    { icon_name: 'sports',name: typeNames.sports.name,link:typeNames.sports.linkName },
    { icon_name: 'eng', name:typeNames.foreign.name, link:typeNames.foreign.linkName },
    { icon_name: 'child', name:typeNames.child.name,link:typeNames.child.linkName },
    { icon_name: 'bungaku', name:typeNames.literature.name,link:typeNames.literature.linkName },
    { icon_name: 'gijuzu', name:typeNames.art.name,link:typeNames.art.linkName },
    { icon_name: 'skill', name: typeNames.science_technology.name,link:typeNames.science_technology.linkName },
    { icon_name: 'history', name: typeNames.history.name,link:typeNames.history.linkName },
    { icon_name: 'shakai', name: typeNames.society.name, link:typeNames.society.linkName},
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

  toBookPage(book,cachable=true,idbook='1') {
    const option:Options = {
      Cachable:cachable,
      x_refresh:cachable,
      CacheProperty:storageNames.new
    }
    const bookDetailreqBody:BookDetailRequestBodyModel = {
      idbook
    }
    this.store.dispatch(new BookClick(option,bookDetailreqBody));
    this.navCtrl.push('BookPage', { book });
  }
  toCartPage() {
    this.navCtrl.push(CartPage);
  }
  toBookTypePage(typeName,cachable=true) {
    const option:Options = {
      Cachable:cachable,
      x_refresh:cachable,
      CacheProperty:storageNames.new
    }
    const reqBody:BookTypeListRequestBodyModel = {
      typeName
    }
    this.store.dispatch(new LoadBookType(option,reqBody));
    this.navCtrl.push('BookTypePage',{typeTitle:typeName})
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
