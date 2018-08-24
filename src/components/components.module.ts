import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule } from 'ionic-angular';
import { CainixihuanComponent } from './cainixihuan/cainixihuan';
import { YouMayLikeComponent } from './you-may-like/you-may-like';
import { CartComponent } from './cart/cart.component';
@NgModule({
	declarations: [CainixihuanComponent,YouMayLikeComponent,CartComponent],
	imports: [BrowserModule,IonicModule],
	exports: [CainixihuanComponent,YouMayLikeComponent,CartComponent]
})
export class ComponentsModule {}
