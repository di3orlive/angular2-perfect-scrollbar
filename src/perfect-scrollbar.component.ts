import * as Ps from 'perfect-scrollbar';

import { DoCheck, Component, ElementRef } from '@angular/core';

@Component({
  selector: '[perfect-scrollbar]'
})

export class PerfectScrollbarDirective implements DoCheck {
  constructor( private elementRef: ElementRef ) {
  }

  ngDoCheck() {
    Ps.update(this.elementRef.nativeElement);
  }

  ngAfterViewInit() {
    Ps.initialize(this.elementRef.nativeElement);
  }
}
