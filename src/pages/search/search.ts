import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Searchbar } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  myInput;
  @ViewChild('searchBar') searchBar:Searchbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    //this.searchBar.setFocus();
    setTimeout(()=>{
      this.searchBar.setFocus();
    },1000)
  }
  onInput(){

  }
  onCancel(){

  }
}
