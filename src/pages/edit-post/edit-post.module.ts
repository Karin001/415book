import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPostPage } from './edit-post';
import { DirectivesModule} from '../../directives/directives.module'
@NgModule({
  declarations: [
    EditPostPage
  ],
  imports: [
    IonicPageModule.forChild(EditPostPage),
    DirectivesModule
  ],
})
export class EditPostPageModule {}
