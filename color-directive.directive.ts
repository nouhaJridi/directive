import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

 @HostBinding('style.backgroundColor') bgc = 'red' ;
 @HostBinding('style.border-color') brc = 'red' ;
  constructor() { }
 @HostListener('keyup') onChange(){
  this.bgc = '#'+(Math.random()*0xFFFFFF<<0).toString(16) ;
  this.brc = '#'+(Math.random()*0xFFFFFF<<0).toString(16) ;
}

}
