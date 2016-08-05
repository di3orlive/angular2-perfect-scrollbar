import * as Ps from 'perfect-scrollbar';

import { DoCheck, OnDestroy, Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'perfect-scrollbar',
  template: '<ng-content></ng-content>'
})

export class PerfectScrollbarComponent implements DoCheck, OnDestroy, AfterViewInit {
  private width: number;
  private height: number;

  constructor( private elementRef: ElementRef ) {
  }

  ngDoCheck() {
    var width = this.elementRef.nativeElement.offsetWidth;
    var height = this.elementRef.nativeElement.offsetHeight;

    if (width !== this.width || height !== this.height) {
      this.width = width;
      this.height = height;

      Ps.update(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy() {
    Ps.destroy(this.elementRef.nativeElement);
  }

  ngAfterViewInit() {
    Ps.initialize(this.elementRef.nativeElement);
  }

  scrollTo(position: number) {
    this.elementRef.nativeElement.scrollTop = position;

    Ps.update(this.elementRef.nativeElement);
  }
}
