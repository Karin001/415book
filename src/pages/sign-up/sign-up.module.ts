import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpPage } from './sign-up';
import { DirectivesModule } from '../../directives/directives.module'
@NgModule({
  declarations: [
    SignUpPage
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
    DirectivesModule
  ],
})
export class SignUpPageModule {}
