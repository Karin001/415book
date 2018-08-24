import { Directive, HostListener } from '@angular/core';
import { BtnClickService } from './service';
@Directive({
    selector: '[fly-to-cart-btn]',
})
export class BtnClickDirective { 
    constructor(
        public btnService:BtnClickService
    ){

    }
    @HostListener('click',['$event'])
    flyTheBooK(){
        console.log('clicked')
        this.btnService.emmit();
    }
  
}