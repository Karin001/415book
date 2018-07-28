import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  book;
  @ViewChild('box') box1:ElementRef;
  @ViewChild('con') con1:ElementRef;
  moreShow=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.book = this.navParams.get('book');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
    if(this.box1.nativeElement.scrollHeight<=this.con1.nativeElement.scrollHeight){
      this.moreShow = true;
    }
  }
  print(con,box){
    console.log(this.box1.nativeElement.scrollHeight,this.con1.nativeElement.scrollHeight);

  }
}
