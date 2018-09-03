import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookPage } from './book';

import {ComponentsModule} from '../../components/components.module'
@NgModule({
  declarations: [
    BookPage
  ],
  imports: [
    IonicPageModule.forChild(BookPage),
    ComponentsModule
  ],
  entryComponents:[BookPage]
})
export class BookPageModule {}
