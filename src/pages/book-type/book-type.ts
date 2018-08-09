import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
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
  title;
  typeListData;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider
  ) {
    this.title = this.navParams.get('typeTitle');
    this.restApi.watchBookTypeList().subscribe(signal => {
      if(signal === `success for ${this.title}`) {
        this.typeListData = this.restApi.bookTypeListCache;
        console.log('222223',this.typeListData)
      }
    });
    this.restApi.getBooktypeList(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookTypePage');
  }

}