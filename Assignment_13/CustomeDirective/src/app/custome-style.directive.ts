import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective
{

  constructor(private eobj:ElementRef)
  {
    this.eobj.nativeElement.style.background = 'yellow';
  }

}
