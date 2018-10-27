import { Directive, HostListener, Input } from '@angular/core';
import { BtnClickService } from './service';
@Directive({
    selector: '[fly-to-cart-btn]',
})
export class BtnClickDirective {
  @Input('fly-to-cart-btn') flytocartbtn;
  constructor(
        public btnService:BtnClickService
    ){

    }
    @HostListener('click',['$event'])
    flyTheBooK(){
        console.log('clicked')
        this.btnService.emmit(this.flytocartbtn);
    }

}
