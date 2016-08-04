"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Ps = require('perfect-scrollbar');
var core_1 = require('@angular/core');
var PerfectScrollbarDirective = (function () {
    function PerfectScrollbarDirective(elementRef) {
        this.elementRef = elementRef;
    }
    PerfectScrollbarDirective.prototype.ngDoCheck = function () {
        Ps.update(this.elementRef.nativeElement);
    };
    PerfectScrollbarDirective.prototype.ngAfterViewInit = function () {
        Ps.initialize(this.elementRef.nativeElement);
    };
    PerfectScrollbarDirective = __decorate([
        core_1.Component({
            selector: '[perfect-scrollbar]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PerfectScrollbarDirective);
    return PerfectScrollbarDirective;
}());
exports.PerfectScrollbarDirective = PerfectScrollbarDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBWSxFQUFFLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUV4QyxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFNL0Q7SUFDRSxtQ0FBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUMzQyxDQUFDO0lBRUQsNkNBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBZEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDOztpQ0FBQTtJQWFGLGdDQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxpQ0FBeUIsNEJBV3JDLENBQUEiLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUHMgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuXG5pbXBvcnQgeyBEb0NoZWNrLCBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3BlcmZlY3Qtc2Nyb2xsYmFyXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgUHMudXBkYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBQcy5pbml0aWFsaXplKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
