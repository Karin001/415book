import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms';
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
  selector: '[forbidenWord]', // Attribute selector
  providers:[{provide: NG_VALIDATORS, useExisting:FobidenValidatorDirective, multi:true}]
})
export class FobidenValidatorDirective {
  constructor() {
    console.log('Hello forbiden Directive');
  }
  validate(control: AbstractControl): {[key: string]: any} | null {
  
      return regCheck(control, /^[A-Za-z0-9\-\.()\/\\_:]+$/, 'forbiden', '含非法字符');
    
  }
}
