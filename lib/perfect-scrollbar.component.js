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
var PerfectScrollbarComponent = (function () {
    function PerfectScrollbarComponent(elementRef) {
        this.elementRef = elementRef;
    }
    PerfectScrollbarComponent.prototype.ngDoCheck = function () {
        var width = this.elementRef.nativeElement.offsetWidth;
        var height = this.elementRef.nativeElement.offsetHeight;
        if (width !== this.width || height !== this.height) {
            this.width = width;
            this.height = height;
            Ps.update(this.elementRef.nativeElement);
        }
    };
    PerfectScrollbarComponent.prototype.ngOnDestroy = function () {
        Ps.destroy(this.elementRef.nativeElement);
    };
    PerfectScrollbarComponent.prototype.ngAfterViewInit = function () {
        Ps.initialize(this.elementRef.nativeElement);
    };
    PerfectScrollbarComponent.prototype.update = function () {
        Ps.update(this.elementRef.nativeElement);
    };
    PerfectScrollbarComponent.prototype.scrollTo = function (position) {
        this.elementRef.nativeElement.scrollTop = position;
        Ps.update(this.elementRef.nativeElement);
    };
    PerfectScrollbarComponent = __decorate([
        core_1.Component({
            selector: 'perfect-scrollbar',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PerfectScrollbarComponent);
    return PerfectScrollbarComponent;
}());
exports.PerfectScrollbarComponent = PerfectScrollbarComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBWSxFQUFFLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUV4QyxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFPekY7SUFJRSxtQ0FBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUMzQyxDQUFDO0lBRUQsNkNBQVMsR0FBVDtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN0RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFFeEQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELG1EQUFlLEdBQWY7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDBDQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxRQUFnQjtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRW5ELEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBeENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDOztpQ0FBQTtJQXNDRixnQ0FBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksaUNBQXlCLDRCQW9DckMsQ0FBQSIsImZpbGUiOiJwZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcyBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCB7IERvQ2hlY2ssIE9uRGVzdHJveSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlcmZlY3Qtc2Nyb2xsYmFyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcblxuZXhwb3J0IGNsYXNzIFBlcmZlY3RTY3JvbGxiYXJDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHdpZHRoICE9PSB0aGlzLndpZHRoIHx8IGhlaWdodCAhPT0gdGhpcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICBQcy51cGRhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIFBzLmRlc3Ryb3kodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFBzLmluaXRpYWxpemUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIFBzLnVwZGF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBzY3JvbGxUbyhwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG5cbiAgICBQcy51cGRhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
