import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookPage } from './book';
import { CartPageModule }  from '../cart/cart.module';
@NgModule({
  declarations: [
    BookPage
  ],
  imports: [
    IonicPageModule.forChild(BookPage),
    CartPageModule
  ],
  entryComponents:[BookPage]
})
export class BookPageModule {}
