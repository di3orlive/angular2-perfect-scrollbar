import { DoCheck, ElementRef } from '@angular/core';
export declare class PerfectScrollbarDirective implements DoCheck {
    private elementRef;
    constructor(elementRef: ElementRef);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
