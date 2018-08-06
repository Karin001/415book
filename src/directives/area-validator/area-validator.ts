import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms';
/**
 * Generated class for the AreaValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[areaFull]', // Attribute selector
  providers:[{provide: NG_VALIDATORS, useExisting:AreaValidatorDirective, multi:true}]
})
export class AreaValidatorDirective {

  constructor() {
    console.log('Hello AreaValidatorDirective Directive');
  }
  validate(control: AbstractControl): {[key: string]: any} | null {
    return (control.value && control.value.split(' ').length===3)?null:{

        message:'地区选择信息不完整'

    }
  }
}
