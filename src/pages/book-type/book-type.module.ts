import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookTypePage } from './book-type';

@NgModule({
  declarations: [
    BookTypePage,
  ],
  imports: [
    IonicPageModule.forChild(BookTypePage),
  ],
})
export class BookTypePageModule {}
