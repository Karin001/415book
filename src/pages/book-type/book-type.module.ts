import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookTypePage } from './book-type';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
  declarations: [
    BookTypePage,

  ],
  imports: [
    IonicPageModule.forChild(BookTypePage),
    LazyLoadImagesModule
  ],
})
export class BookTypePageModule {}
