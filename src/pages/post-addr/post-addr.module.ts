import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostAddrPage } from './post-addr';
import { DirectivesModule } from '../../directives/directives.module'
@NgModule({
  declarations: [
    PostAddrPage
  ],
  imports: [
    IonicPageModule.forChild(PostAddrPage),
    DirectivesModule
  ],
})
export class PostAddrPageModule {}
