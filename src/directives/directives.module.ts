import { NgModule, } from '@angular/core';
import { NG_VALIDATORS} from '@angular/forms'
import { MyvalidatorDirective } from './myvalidator/myvalidator';
import { AreaValidatorDirective } from './area-validator/area-validator';
import { PhoneValidatorDirective } from './phone-validator/phone-validator';
import { XiangxidizhiDirective } from './xiangxidizhi/xiangxidizhi';
import { FobidenValidatorDirective } from './fobiden-validator/fobiden-validator';
import { FlyToCartDirective } from './fly-to-cart/fly-to-cart';
@NgModule({
	declarations: [
    MyvalidatorDirective,
    AreaValidatorDirective,
    PhoneValidatorDirective,
    XiangxidizhiDirective,
    FobidenValidatorDirective,
    FlyToCartDirective
  ],
	imports: [],
  exports: [
    MyvalidatorDirective,
    AreaValidatorDirective,
    PhoneValidatorDirective,
    XiangxidizhiDirective,
    FobidenValidatorDirective,
    FlyToCartDirective
  ],
  providers:[]
})
export class DirectivesModule {}
