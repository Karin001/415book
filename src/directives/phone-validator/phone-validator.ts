import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms';
/**
 * Generated class for the PhoneValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[phoneNumber]', // Attribute selector
  providers:[{provide: NG_VALIDATORS, useExisting:PhoneValidatorDirective, multi:true}]
})
export class PhoneValidatorDirective {
  constructor() {
    console.log('Hello PhoneValidatorDirective Directive');
  }
  validate(control: AbstractControl): {[key: string]: any} | null {
    const temp = control.value?control.value+'':'';

    return temp && temp.length===11?null:{

        message:`请输入11位电话号码`

    };
  }
}
