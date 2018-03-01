import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    console.log(el.nativeElement.className)
    if(el.nativeElement.className.indexOf('has-error')>-1){
     alert("empty Email");
    }
    renderer.setStyle(el.nativeElement, 'color', 'red');
  }

}
