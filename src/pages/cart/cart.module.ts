import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { EditRemovePage } from './modal-page/editRemove';

@NgModule({
  declarations: [


  ],
  imports: [
    IonicPageModule.forChild(CartPage),
  ],

})
export class CartPageModule {}
