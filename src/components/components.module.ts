import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular';
import { CainixihuanComponent } from './cainixihuan/cainixihuan';
import { YouMayLikeComponent } from './you-may-like/you-may-like';
import { CartComponent } from './cart/cart.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
	declarations: [CainixihuanComponent,YouMayLikeComponent,CartComponent],
	imports: [CommonModule,IonicModule,LazyLoadImagesModule],
	exports: [CainixihuanComponent,YouMayLikeComponent,CartComponent]
})
export class ComponentsModule {}
