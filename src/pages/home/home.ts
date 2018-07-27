import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannerImgs=[1,2,3]
  constructor(public navCtrl: NavController) {

  }

}
