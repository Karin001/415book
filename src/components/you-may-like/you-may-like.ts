import { Component } from '@angular/core';
import { Options, BookDetailRequestBodyModel, BookTypeListRequestBodyModel } from '../../providers/book/book.service.model';
import { BookClick, ScrollLoadMore } from '../../app/state/app.action';
import { NavController} from 'ionic-angular'
import { Store, Select } from '@ngxs/store'
import { LoadBookType } from '../../app/state/app.action'
import { BookTypeState } from '../../app/state/app.state'
import { Observable } from 'rxjs';
import { BookListType } from '../../app/state/app.stateModel';
import { filter } from 'rxjs/operators';
import { typeNames, environment_production } from '../../config'

/**
 * Generated class for the YouMayLikeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
const bookTypeReqBody: BookTypeListRequestBodyModel = {
  typeName: typeNames.recommend.linkName
}
const option: Options = {
  x_refresh: false,
  Cachable: false,
  CacheProperty: ''
}
@Component({
  selector: 'you-may-like',
  templateUrl: 'you-may-like.html'
})
export class YouMayLikeComponent {
  @Select(BookTypeState.bookType) srcList$: Observable<BookListType>
  get list$() {
    return !environment_production ? this.srcList$.pipe(filter(data => data.typeName === typeNames.hot.linkName))
      : this.srcList$.pipe(filter(data => data.typeName === typeNames.recommend.linkName))
  }
  text: string;

  constructor(
    public navCtrl: NavController,
    public store: Store
  ) {
    console.log('Hello YouMayLikeComponent Component');
    this.text = 'Hello World';
    this.store.dispatch(new LoadBookType(option, bookTypeReqBody))

  }
  toBookPage(idbook) {
    const option: Options = {
      x_refresh: false,
      Cachable: false,
      CacheProperty: ''
    }
    const bookDetailReqBody: BookDetailRequestBodyModel = {
      idbook: idbook
    }
    this.store.dispatch(new BookClick(option, bookDetailReqBody))
    this.navCtrl.push('BookPage')
  }
  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.store.dispatch(new ScrollLoadMore(option, bookTypeReqBody)).subscribe(() => {
        infiniteScroll.complete(

        );
      })

    }, 2000)
  }



}
