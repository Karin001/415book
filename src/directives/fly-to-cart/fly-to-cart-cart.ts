import { Directive,AfterViewInit,ViewContainerRef,Renderer2 } from '@angular/core';
import {BtnClickService} from './service';
@Directive({
    selector: '[fly-to-cart-shake]',
})
export class CartShakeDirective implements AfterViewInit {
    el;
    constructor(
        public btnService:BtnClickService,
        public viewContainer:ViewContainerRef,
        public renderer: Renderer2
    ){
    }
    ngAfterViewInit(){
        this.el = this.viewContainer.element.nativeElement;
        this.btnService.toBeShaked().subscribe(shake =>{
            if(shake) {
                
                console.log('1')
                this.renderer.removeClass(this.el,'title-cart-action');
                setTimeout(()=>{
                    this.renderer.addClass(this.el,'title-cart-action');
                },100)
               
            }
        })
    }
 }