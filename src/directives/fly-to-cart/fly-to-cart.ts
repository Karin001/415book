import { Directive,ComponentRef,AfterViewInit,
   Renderer2,ComponentFactoryResolver, ViewContainerRef,HostListener,ElementRef,HostBinding } from '@angular/core';
import {BtnClickService} from './service';

/**
 * Generated class for the FlyToCartDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[fly-to-cart]' // Attribute selector
})
export class FlyToCartDirective implements AfterViewInit{
  el;
  src;
  cloneEl;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewcontainerRef: ViewContainerRef,
    public renderer: Renderer2,
    public btnService:BtnClickService
  ) {
    console.log('Hello FlyToCartDirective Directive');
    this.el = this.viewcontainerRef.element.nativeElement;
    this.cloneEl = this.el.cloneNode(true);
    
   
  }
  ngAfterViewInit(){
     this.src = getComputedStyle(this.el).backgroundImage; 
   
    console.log('cloneNode',this.cloneEl,this.el.backgroundImage,'a');
    this.btnService.watch().subscribe(clicked => {
      if(clicked) {
        let imgclone = document.createElement('div');
        imgclone.className = "cart-fly";
        this.renderer.setStyle(imgclone,'backgroundImage',this.src);
        document.body.appendChild(imgclone);
        setTimeout(()=>{imgclone.remove()},1100);
        console.log(imgclone)
      }
    })
  }

}
