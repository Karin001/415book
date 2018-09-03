import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './log-in';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LogInPage
  ],
  imports: [
    IonicPageModule.forChild(LogInPage),
    DirectivesModule
  ],


})
export class LogInPageModule {}
