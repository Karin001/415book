import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular'

import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { UserPage } from '../user/user';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  index = 0;
  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = UserPage;

  constructor(public navParams: NavParams) {
    this.index = this.navParams.get('index');
  }
}
