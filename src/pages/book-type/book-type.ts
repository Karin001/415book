import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Store,Select } from '@ngxs/store';
import { BookTypeState } from '../../app/state/app.state'

import { Observable } from 'rxjs';
import { BookListType } from '../../app/state/app.stateModel';
/**
 * Generated class for the BookTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-type',
  templateUrl: 'book-type.html',
})
export class BookTypePage {
  @Select(BookTypeState.bookType) bookType$:Observable<BookListType>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookTypePage');
  }

}
