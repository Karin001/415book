import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store,Select } from '@ngxs/store';
import { BookTypeState } from '../../app/state/app.state'
import {BookClick, ScrollLoadMore} from '../../app/state/app.action'
import { Observable } from 'rxjs';
import { BookListType } from '../../app/state/app.stateModel';
import { Options, BookDetailRequestBodyModel, BookTypeListRequestBodyModel } from '../../providers/book/book.service.model';
import { typeNames, environment_production } from '../../config';
import { filter } from 'rxjs/operators';
/**
 * Generated class for the BookTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const option: Options = {
  x_refresh: false,
  Cachable: false,
  CacheProperty: ''
}
@IonicPage()
@Component({
  selector: 'page-book-type',
  templateUrl: 'book-type.html',
})
export class BookTypePage {
  @Select(BookTypeState.bookType) srcBookType$:Observable<BookListType>
  get bookType$(){

    return environment_production? this.srcBookType$.pipe(filter(data=>data.typeName === this.typeName))
    :this.srcBookType$.pipe(filter(data=>data.typeName === 'hot'))
  }
  typeName = '';
  get title(){
    return typeNames[this.typeName]['name']
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: Store

  ) {
    this.typeName = this.navParams.get('typeTitle')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookTypePage');
  }
  toBookPage(idbook){
    const option:Options = {
      x_refresh:false,
      Cachable:false,
      CacheProperty:''
    }
    const bookDetailReqBody:BookDetailRequestBodyModel = {
      idbook:idbook
    }
    this.store.dispatch(new BookClick(option,bookDetailReqBody))
    this.navCtrl.push('BookPage')
  }

  doInfinite(infiniteScroll) {
    const bookTypeReqBody: BookTypeListRequestBodyModel = {
      typeName: this.typeName
    }
    setTimeout(() => {
      this.store.dispatch(new ScrollLoadMore(option, bookTypeReqBody)).subscribe(() => {
        infiniteScroll.complete(

        );
      })

    }, 2000)
  }

}
