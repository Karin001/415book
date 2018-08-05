import { NgModule, } from '@angular/core';
import { NG_VALIDATORS} from '@angular/forms'
import { MyvalidatorDirective } from './myvalidator/myvalidator';
@NgModule({
	declarations: [MyvalidatorDirective],
	imports: [],
  exports: [MyvalidatorDirective],
  providers:[]
})
export class DirectivesModule {}
