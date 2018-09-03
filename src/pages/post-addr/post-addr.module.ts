import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostAddrPage } from './post-addr';

@NgModule({
  declarations: [
    PostAddrPage
  ],
  imports: [
    IonicPageModule.forChild(PostAddrPage),
  ],
})
export class PostAddrPageModule {}
