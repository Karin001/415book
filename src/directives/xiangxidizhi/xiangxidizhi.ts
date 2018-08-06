import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms';
/**
 * Generated class for the XiangxidizhiDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[xxdz]', // Attribute selector
  providers:[{provide: NG_VALIDATORS, useExisting:XiangxidizhiDirective, multi:true}]
})
export class XiangxidizhiDirective {

  constructor() {
    console.log('Hello XiangxidizhiDirective Directive');
  }
  validate(control: AbstractControl): {[key: string]: any} | null {
    return control.value?null:{

        message:'请填写详细地址'

    };
  }

}
