import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl} from '@angular/forms';
/**
 * Generated class for the PhoneValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
function regCheck(c: AbstractControl, reg: RegExp, name: string, message: string) {
  const match = reg.test(c.value);
  return !match ? {
    [name]: message
  } : null;
}
@Directive({
  selector: '[phoneNumber]', // Attribute selector
  providers:[{provide: NG_VALIDATORS, useExisting:PhoneValidatorDirective, multi:true}]
})
export class PhoneValidatorDirective {
  constructor() {
    console.log('Hello PhoneValidatorDirective Directive');
  }
  validate(control: AbstractControl): {[key: string]: any} | null {
    return regCheck(control, /^1(3[0-9]|4[579]|5[0-35-9]|7[0-9]|8[0-9])\d{8}$/, 'mobile', '请输入合法手机号')
  }
}
