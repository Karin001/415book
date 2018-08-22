import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule } from 'ionic-angular';
import { CainixihuanComponent } from './cainixihuan/cainixihuan';
import { YouMayLikeComponent } from './you-may-like/you-may-like';
@NgModule({
	declarations: [CainixihuanComponent,YouMayLikeComponent],
	imports: [BrowserModule,IonicModule],
	exports: [CainixihuanComponent,YouMayLikeComponent]
})
export class ComponentsModule {}
