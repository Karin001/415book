import { Directive } from '@angular/core';
import { AbstractControl,NG_VALIDATORS } from '@angular/forms';
/**
 * Generated class for the MyvalidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
function regCheck(c: AbstractControl, reg: RegExp, name: string, message: string) {
  const match = reg.test(c.value);
  return !match ?
    {'message':message}
   : null;
}
// function chnChar(c: AbstractControl): ValidationErrors {
//   return regCheck(c, /^[\u4E00-\u9FA5]+$/, 'chnChar', '请输入中文字符');
// }
@Directive({
  selector: '[chnOnly]', // Attribute selector
  providers: [{provide: NG_VALIDATORS, useExisting:MyvalidatorDirective, multi:true}],
})
export class MyvalidatorDirective {

  constructor() {
    console.log('Hello MyvalidatorDirective Directive');
  }
  validate(control: AbstractControl): {[key: string]: any} | null {
    return regCheck(control, /^[\u4E00-\u9FA5]+$/, 'chnOnly', '收货人请输入中文字符');
  }

}
