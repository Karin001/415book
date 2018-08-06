import { NgModule, } from '@angular/core';
import { NG_VALIDATORS} from '@angular/forms'
import { MyvalidatorDirective } from './myvalidator/myvalidator';
import { AreaValidatorDirective } from './area-validator/area-validator';
import { PhoneValidatorDirective } from './phone-validator/phone-validator';
import { XiangxidizhiDirective } from './xiangxidizhi/xiangxidizhi';
@NgModule({
	declarations: [MyvalidatorDirective,
    AreaValidatorDirective,
    PhoneValidatorDirective,
    XiangxidizhiDirective],
	imports: [],
  exports: [MyvalidatorDirective,
    AreaValidatorDirective,
    PhoneValidatorDirective,
    XiangxidizhiDirective],
  providers:[]
})
export class DirectivesModule {}
