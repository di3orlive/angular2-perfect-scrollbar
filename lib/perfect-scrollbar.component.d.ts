import { DoCheck, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
export declare class PerfectScrollbarComponent implements DoCheck, OnDestroy, AfterViewInit {
    private elementRef;
    private width;
    private height;
    constructor(elementRef: ElementRef);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    update(): void;
    scrollTo(position: number): void;
}
