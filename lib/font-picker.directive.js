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
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var WebFont = require('webfontloader');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var font_picker_service_1 = require('./font-picker.service');
var classes_1 = require('./classes');
var FontPickerDirective = (function () {
    function FontPickerDirective(el, vc, cd, dcl, service) {
        this.el = el;
        this.vc = vc;
        this.cd = cd;
        this.dcl = dcl;
        this.service = service;
        this.created = false;
        this.cpWidth = '280px';
        this.cpHeight = '280px';
        this.cpFallbackFont = {
            family: 'Roboto',
            styles: ['regular'],
            files: { regular: '' },
            style: 'regular',
            size: 14
        };
        this.fontPickerChange = new core_1.EventEmitter();
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpUploadButton = false;
        this.cpUploadButtonText = 'Upload';
        this.cpUploadButtonClass = 'cp-upload-button-class';
    }
    FontPickerDirective.prototype.ngOnInit = function () {
        var fontPicker = this.fontPicker;
        if (!this.fontPicker) {
            this.fontPicker = this.cpFallbackFont;
        }
        this.fontPickerChange.emit(this.fontPicker);
        if (fontPicker != this.fontPicker) {
            this.cd.detectChanges();
        }
    };
    FontPickerDirective.prototype.onClick = function () {
        var _this = this;
        if (!this.created) {
            this.created = true;
            this.dcl.loadNextToLocation(DialogComponent, this.vc)
                .then(function (res) {
                res.instance.setDialog(_this, _this.el, _this.fontPicker, _this.cpPosition, _this.cpPositionOffset, _this.cpPositionRelativeToArrow, _this.cpUploadButton, _this.cpUploadButtonClass, _this.cpUploadButtonText, _this.cpCancelButton, _this.cpCancelButtonClass, _this.cpCancelButtonText, _this.cpHeight, _this.cpWidth);
                _this.dialog = res.instance;
            });
        }
        else if (this.dialog) {
            this.dialog.setInitialFont(this.fontPicker);
            this.dialog.openFontPicker();
        }
    };
    __decorate([
        core_1.Input('fontPicker'), 
        __metadata('design:type', classes_1.Font)
    ], FontPickerDirective.prototype, "fontPicker", void 0);
    __decorate([
        core_1.Input('cpWidth'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpWidth", void 0);
    __decorate([
        core_1.Input('cpHeight'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpHeight", void 0);
    __decorate([
        core_1.Input('cpFallbackFont'), 
        __metadata('design:type', classes_1.Font)
    ], FontPickerDirective.prototype, "cpFallbackFont", void 0);
    __decorate([
        core_1.Output('fontPickerChange'), 
        __metadata('design:type', Object)
    ], FontPickerDirective.prototype, "fontPickerChange", void 0);
    __decorate([
        core_1.Input('cpPosition'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpPosition", void 0);
    __decorate([
        core_1.Input('cpPositionOffset'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpPositionOffset", void 0);
    __decorate([
        core_1.Input('cpPositionRelativeToArrow'), 
        __metadata('design:type', Boolean)
    ], FontPickerDirective.prototype, "cpPositionRelativeToArrow", void 0);
    __decorate([
        core_1.Input('cpCancelButton'), 
        __metadata('design:type', Boolean)
    ], FontPickerDirective.prototype, "cpCancelButton", void 0);
    __decorate([
        core_1.Input('cpCancelButtonText'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpCancelButtonText", void 0);
    __decorate([
        core_1.Input('cpCancelButtonClass'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpCancelButtonClass", void 0);
    __decorate([
        core_1.Input('cpUploadButton'), 
        __metadata('design:type', Boolean)
    ], FontPickerDirective.prototype, "cpUploadButton", void 0);
    __decorate([
        core_1.Input('cpUploadButtonText'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpUploadButtonText", void 0);
    __decorate([
        core_1.Input('cpUploadButtonClass'), 
        __metadata('design:type', String)
    ], FontPickerDirective.prototype, "cpUploadButtonClass", void 0);
    FontPickerDirective = __decorate([
        core_1.Directive({
            selector: '[fontPicker]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.ChangeDetectorRef, core_1.DynamicComponentLoader, font_picker_service_1.FontPickerService])
    ], FontPickerDirective);
    return FontPickerDirective;
}());
exports.FontPickerDirective = FontPickerDirective;
var DialogComponent = (function () {
    function DialogComponent(el, service) {
        var _this = this;
        this.el = el;
        this.service = service;
        this.styles = [];
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.searchTerm = new forms_1.FormControl('');
        this.searchTerm
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (text) {
            _this.searchGoogleFonts(text);
        });
    }
    DialogComponent.prototype.setDialog = function (instance, elementRef, font, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpUploadButton, cpUploadButtonClass, cpUploadButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpHeight, cpWidth) {
        var _this = this;
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.setInitialFont(font);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset);
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.cpUploadButton = cpUploadButton;
        this.cpUploadButtonText = cpUploadButtonText;
        this.cpUploadButtonClass = cpUploadButtonClass;
        this.cpWidth = parseInt(cpWidth);
        this.cpHeight = parseInt(cpHeight);
        this.service.getAllFonts('popularity').subscribe(function (data) {
            _this.allFonts = data.items;
            _this.loadGoogleFonts(data.items.slice(0, 9));
        }, function (err) { return console.log(err); });
    };
    DialogComponent.prototype.setInitialFont = function (font) {
        this.initialFont = font;
        this.styles = font.styles;
    };
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.font = this.initialFont;
        this.listenerResize = function () { _this.onResize(); };
        this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
        this.openFontPicker();
    };
    DialogComponent.prototype.onResize = function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
    };
    DialogComponent.prototype.onMouseDown = function (event) {
        if (!this.isDescendant(this.el.nativeElement, event.target)
            && event.target != this.directiveElementRef.nativeElement) {
            this.closeFontPicker();
        }
        //if(event.target.textContent == 'ABCDEabcde12345@€!?-'){ }
        //console.log(event.target.textContent)
        //this.changeInput(event)
    };
    DialogComponent.prototype.onSelectFont = function (font) {
        var size = this.font.size;
        font.size = size;
        this.font = {
            family: font.family,
            styles: font.variants,
            files: font.files,
            style: 'regular',
            size: size
        };
        console.log(font);
    };
    DialogComponent.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    DialogComponent.prototype.openFontPicker = function () {
        if (!this.show) {
            this.setDialogPosition();
            window.addEventListener('resize', this.listenerResize);
            document.addEventListener('mousedown', this.listenerMouseDown);
            this.show = true;
        }
    };
    DialogComponent.prototype.closeFontPicker = function () {
        this.show = false;
        window.removeEventListener('resize', this.listenerResize);
        document.removeEventListener('mouseup', this.listenerMouseDown);
    };
    DialogComponent.prototype.uploadFontFiles = function () {
    };
    DialogComponent.prototype.cancelFontSelect = function () {
        this.font = this.initialFont;
        this.closeFontPicker();
    };
    DialogComponent.prototype.loadGoogleFonts = function (fonts) {
        this.fonts = fonts.slice(0, 9);
        fonts.forEach(function (font) {
            WebFont.load({
                google: {
                    families: [font.family]
                }
            });
        });
    };
    DialogComponent.prototype.searchGoogleFonts = function (value) {
        value = value.toLowerCase();
        var loadFonts = Array();
        if (this.allFonts) {
            this.allFonts.forEach(function (font) {
                if (value === font.family.toLowerCase() ||
                    font.family.toLowerCase().includes(value)) {
                    loadFonts.push(font);
                }
            });
            this.loadGoogleFonts(loadFonts);
        }
    };
    DialogComponent.prototype.createDialogBox = function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    DialogComponent.prototype.setDialogPosition = function () {
        var node = this.directiveElementRef.nativeElement, parentNode = null, position = 'static';
        while (node !== null && node.tagName !== 'HTML') {
            position = window.getComputedStyle(node).getPropertyValue("position");
            if (position !== 'static' && parentNode === null) {
                parentNode = node;
            }
            if (position === 'fixed') {
                break;
            }
            node = node.parentNode;
        }
        if (position !== 'fixed') {
            var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, true);
            if (parentNode === null) {
                parentNode = node;
            }
            var boxParent = this.createDialogBox(parentNode, true);
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
        }
        else {
            var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, false);
            this.top = boxDirective.top;
            this.left = boxDirective.left;
            this.position = 'fixed';
        }
        if (this.cpPosition === 'left') {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left -= this.cpWidth + this.dialogArrowSize;
        }
        else if (this.cpPosition === 'top') {
            this.top -= this.cpHeight + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            this.arrowTop = this.cpHeight - 1;
        }
        else if (this.cpPosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        }
        else {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left += boxDirective.width + this.dialogArrowSize;
        }
    };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'font-picker',
            template: "\n      <div class=\"font-picker\" *ngIf=\"show\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\">\n        <div class=\"arrow arrow-{{cpPosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n        <div>\n          <input [formControl]=\"searchTerm\" class=\"search-field\" placeholder=\"Search from Google Web Fonts...\" />\n        </div>\n  \n      \t<div class=\"font-list\">\n        \t<div *ngFor=\"let font of fonts\" class=\"font-item\" (click)=\"onSelectFont(font)\">\n        \t  <div class=\"font-name\">{{font.family}}</div>\n            <div class=\"font-text\" [ngStyle]=\"{'font-family': font.family}\">ABCDEabcde12345@\u20AC!?-</div>\n        \t</div>\n      \t</div>\n\n      \t<div class=\"font-options\">\n       \t\t<div class=\"left\">\n         \t\t<select [(ngModel)]=\"style\" class=\"select-style\">\n       \t \t  \t<option *ngFor=\"let style of styles\" [value]=\"style\">{{font?.style}}</option>\n       \t\t\t</select>\n      \t\t</div>\n\n       \t\t<div class=\"right\">\n         \t\t<input type=\"number\" pattern=\"[0-9]*\" min=\"1\" max=\"100\" [(ngModel)]=\"font.size\" class=\"size-input\" />\n       \t  </div>\n       \t</div>\n\n        <button *ngIf=\"cpUploadButton\" type=\"button\" class=\"{{cpUploadButtonClass}}\" (click)=\"uploadFontFiles()\">{{cpUploadButtonText}}</button>\n\n        <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"cancelFontSelect()\">{{cpCancelButtonText}}</button>\n      </div>\n    ",
            styles: ["\n      /*\n       * Styles for Font Picker\n       *\n       * Janne Julkunen\n       *\n       * @licence: http://opensource.org/licenses/MIT\n       */\n      .font-picker {\n        display: flex;\n        flex-direction: column;\n        cursor: default;\n        width: 230px;\n        height: 280px;\n        border: #777 solid 1px;\n        left: 30px;\n        top: 250px;\n        position: absolute;\n        z-index: 1000;\n        background-color: #fff;\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none; }\n        .font-picker input,\n        .font-picker select {\n          width: 100%;\n          border: none;\n          outline: none;\n          padding: 8px 16px;\n          text-align: left;\n          font-size: 14px;\n          background: none;\n          line-height: 18px;\n          border-bottom: 2px solid #CFCFCF;\n          transition: border 0.3s ease;\n          -moz-appearance: textfield; }\n          .font-picker input:hover, .font-picker input:focus, .font-picker input:active,\n          .font-picker select:hover,\n          .font-picker select:focus,\n          .font-picker select:active {\n            border-bottom: 2px solid #999; }\n          .font-picker input:invalid,\n          .font-picker select:invalid {\n            box-shadow: none; }\n          .font-picker input:-moz-submit-invalid,\n          .font-picker select:-moz-submit-invalid {\n            box-shadow: none; }\n          .font-picker input:-moz-ui-invalid,\n          .font-picker select:-moz-ui-invalid {\n            box-shadow: none; }\n          .font-picker input::-webkit-inner-spin-button, .font-picker input::-webkit-outer-spin-button,\n          .font-picker select::-webkit-inner-spin-button,\n          .font-picker select::-webkit-outer-spin-button {\n            -webkit-appearance: none;\n            margin: 0; }\n        .font-picker .font-list {\n          flex: 1 1 auto;\n          overflow: auto; }\n          .font-picker .font-list .font-item {\n            cursor: pointer;\n            padding: 8px 16px;\n            border-bottom: 1px solid #CFCFCF; }\n            .font-picker .font-list .font-item .font-name {\n              color: #666666;\n              font-size: 14px; }\n            .font-picker .font-list .font-item .font-text {\n              color: #999999;\n              font-size: 16px;\n              padding: 4px 0;\n              text-align: right; }\n        .font-picker .cp-upload-button-class,\n        .font-picker .cp-cancel-button-class {\n          text-align: center;\n          text-transform: uppercase; }\n        .font-picker .arrow {\n          height: 0;\n          width: 0;\n          border-style: solid;\n          position: absolute;\n          z-index: 999999; }\n        .font-picker .arrow-right {\n          border-width: 5px 10px;\n          border-color: transparent #777 transparent transparent;\n          top: 10px;\n          left: -20px; }\n        .font-picker .arrow-left {\n          border-width: 5px 10px;\n          border-color: transparent transparent transparent #777;\n          top: 10px;\n          left: 231px; }\n        .font-picker .arrow-bottom {\n          border-width: 10px 5px;\n          border-color: transparent transparent #777 transparent;\n          top: -20px;\n          left: 10px; }\n        .font-picker .arrow-top {\n          border-width: 10px 5px;\n          border-color: #777 transparent transparent transparent;\n          left: 10px; }\n        .font-picker .size-input {\n          width: 30px;\n          text-align: right; }\n        .font-picker .search-field {\n          box-sizing: border-box;\n          padding: 12px 16px; }\n        .font-picker .font-options {\n          display: flex;\n          padding: 0 8px;\n          border-top: 2px solid #CFCFCF; }\n          .font-picker .font-options .left {\n            box-sizing: border-box;\n            flex: 1 1 auto;\n            padding: 8px; }\n          .font-picker .font-options .right {\n            box-sizing: border-box;\n            padding: 8px; }\n    "],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, font_picker_service_1.FontPickerService])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;

//# sourceMappingURL=data:application/json;base64,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QW9RM0IsQ0FBQSIsImZpbGUiOiJmb250LXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkXCI7XG5cbmltcG9ydCAqIGFzIFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIER5bmFtaWNDb21wb25lbnRMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9udFBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZvbnQtcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBGb250LCBSZXN1bHQgfSBmcm9tICcuL2NsYXNzZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZm9udFBpY2tlcl0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25DbGljaygpJ1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgRm9udFBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZGlhbG9nOiBhbnk7XG4gIHByaXZhdGUgY3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZm9udFBpY2tlcicpIGZvbnRQaWNrZXI6IEZvbnQ7XG5cbiAgQElucHV0KCdjcFdpZHRoJykgY3BXaWR0aDogc3RyaW5nID0gJzI4MHB4JztcbiAgQElucHV0KCdjcEhlaWdodCcpIGNwSGVpZ2h0OiBzdHJpbmcgPSAnMjgwcHgnO1xuXG4gIEBJbnB1dCgnY3BGYWxsYmFja0ZvbnQnKSBjcEZhbGxiYWNrRm9udDogRm9udCA9IHtcbiAgICBmYW1pbHk6ICdSb2JvdG8nLFxuICAgIHN0eWxlczogWydyZWd1bGFyJ10sXG4gICAgZmlsZXM6IHtyZWd1bGFyOiAnJ30sXG4gICAgc3R5bGU6ICdyZWd1bGFyJyxcbiAgICBzaXplOiAxNFxuICB9O1xuXG4gIEBPdXRwdXQoJ2ZvbnRQaWNrZXJDaGFuZ2UnKSBmb250UGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb250PigpO1xuXG4gIEBJbnB1dCgnY3BQb3NpdGlvbicpIGNwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgnY3BQb3NpdGlvbk9mZnNldCcpIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZyA9ICcwJSc7XG4gIEBJbnB1dCgnY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdycpIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoJ2NwQ2FuY2VsQnV0dG9uJykgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdjcENhbmNlbEJ1dHRvblRleHQnKSBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZyA9ICdDYW5jZWwnO1xuICBASW5wdXQoJ2NwQ2FuY2VsQnV0dG9uQ2xhc3MnKSBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcgPSAnY3AtY2FuY2VsLWJ1dHRvbi1jbGFzcyc7XG5cbiAgQElucHV0KCdjcFVwbG9hZEJ1dHRvbicpIGNwVXBsb2FkQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnY3BVcGxvYWRCdXR0b25UZXh0JykgY3BVcGxvYWRCdXR0b25UZXh0OiBzdHJpbmcgPSAnVXBsb2FkJztcbiAgQElucHV0KCdjcFVwbG9hZEJ1dHRvbkNsYXNzJykgY3BVcGxvYWRCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLXVwbG9hZC1idXR0b24tY2xhc3MnO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHZjOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGNkIDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGNsOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvbnRQaWNrZXJTZXJ2aWNlICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cdFx0dmFyIGZvbnRQaWNrZXIgPSB0aGlzLmZvbnRQaWNrZXI7XG5cblx0XHRpZiAoIXRoaXMuZm9udFBpY2tlcikge1xuXHRcdFx0dGhpcy5mb250UGlja2VyID0gdGhpcy5jcEZhbGxiYWNrRm9udDtcblx0XHR9XG5cbiAgICB0aGlzLmZvbnRQaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLmZvbnRQaWNrZXIpO1xuXG5cdFx0aWYgKGZvbnRQaWNrZXIgIT0gdGhpcy5mb250UGlja2VyKSB7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRjbC5sb2FkTmV4dFRvTG9jYXRpb24oRGlhbG9nQ29tcG9uZW50LCB0aGlzLnZjKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcy5pbnN0YW5jZS5zZXREaWFsb2codGhpcywgdGhpcy5lbCwgdGhpcy5mb250UGlja2VyLCB0aGlzLmNwUG9zaXRpb24sIHRoaXMuY3BQb3NpdGlvbk9mZnNldCwgdGhpcy5jcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93LCB0aGlzLmNwVXBsb2FkQnV0dG9uLCB0aGlzLmNwVXBsb2FkQnV0dG9uQ2xhc3MsIHRoaXMuY3BVcGxvYWRCdXR0b25UZXh0LCB0aGlzLmNwQ2FuY2VsQnV0dG9uLCB0aGlzLmNwQ2FuY2VsQnV0dG9uQ2xhc3MsIHRoaXMuY3BDYW5jZWxCdXR0b25UZXh0LCB0aGlzLmNwSGVpZ2h0LCB0aGlzLmNwV2lkdGgpO1xuXG4gICAgICAgICAgICB0aGlzLmRpYWxvZyA9IHJlcy5pbnN0YW5jZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuc2V0SW5pdGlhbEZvbnQodGhpcy5mb250UGlja2VyKTtcblxuICAgICAgICB0aGlzLmRpYWxvZy5vcGVuRm9udFBpY2tlcigpO1xuICAgICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9udC1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb250LXBpY2tlci5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9mb250LXBpY2tlci5zY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHNob3c6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBmb250OiBGb250O1xuICBwcml2YXRlIGZvbnRzOiBGb250W107XG4gIHByaXZhdGUgYWxsRm9udHM6IEZvbnRbXTtcbiAgcHJpdmF0ZSBpbml0aWFsRm9udDogRm9udDtcblxuICBwcml2YXRlIHN0eWxlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIHByaXZhdGUgdG9wOiBudW1iZXI7XG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xuICBwcml2YXRlIHBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkaXJlY3RpdmVJbnN0YW5jZTogYW55O1xuICBwcml2YXRlIGRpcmVjdGl2ZUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lclJlc2l6ZTogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyTW91c2VEb3duOiBhbnk7XG5cbiAgcHJpdmF0ZSBjcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgY3BQb3NpdGlvbk9mZnNldDogbnVtYmVyO1xuXG4gIHByaXZhdGUgY3BDYW5jZWxCdXR0b246IGJvb2xlYW47XG4gIHByaXZhdGUgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3BVcGxvYWRCdXR0b246IGJvb2xlYW47XG4gIHByaXZhdGUgY3BVcGxvYWRCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgY3BVcGxvYWRCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3BXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGNwSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBhcnJvd1RvcDogbnVtYmVyO1xuICBwcml2YXRlIGRpYWxvZ0Fycm93U2l6ZTogbnVtYmVyID0gMTA7XG4gIHByaXZhdGUgZGlhbG9nQXJyb3dPZmZzZXQ6IG51bWJlciA9IDE1O1xuXG4gIHByaXZhdGUgc2VhcmNoVGVybSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2VydmljZTogRm9udFBpY2tlclNlcnZpY2UgKSB7XG4gICAgdGhpcy5zZWFyY2hUZXJtXG4gICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAuZGVib3VuY2VUaW1lKDUwMClcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAuc3Vic2NyaWJlKCh0ZXh0KSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoR29vZ2xlRm9udHModGV4dCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldERpYWxvZyhpbnN0YW5jZTogYW55LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBmb250OiBGb250LCBjcFBvc2l0aW9uOiBzdHJpbmcsIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZyxcbiAgICAgIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4sIGNwVXBsb2FkQnV0dG9uOiBib29sZWFuLCBjcFVwbG9hZEJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwVXBsb2FkQnV0dG9uVGV4dDogc3RyaW5nLCAgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4sIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcsIGNwSGVpZ2h0OiBzdHJpbmcsIGNwV2lkdGg6IHN0cmluZykge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsRm9udChmb250KTtcblxuICAgIHRoaXMuY3BQb3NpdGlvbiA9IGNwUG9zaXRpb247XG4gICAgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0ID0gcGFyc2VJbnQoY3BQb3NpdGlvbk9mZnNldCk7XG4gICAgaWYgKCFjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuY3BDYW5jZWxCdXR0b24gPSBjcENhbmNlbEJ1dHRvbjtcbiAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCA9IGNwQ2FuY2VsQnV0dG9uVGV4dDtcbiAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uQ2xhc3MgPSBjcENhbmNlbEJ1dHRvbkNsYXNzO1xuXG4gICAgdGhpcy5jcFVwbG9hZEJ1dHRvbiA9IGNwVXBsb2FkQnV0dG9uO1xuICAgIHRoaXMuY3BVcGxvYWRCdXR0b25UZXh0ID0gY3BVcGxvYWRCdXR0b25UZXh0O1xuICAgIHRoaXMuY3BVcGxvYWRCdXR0b25DbGFzcyA9IGNwVXBsb2FkQnV0dG9uQ2xhc3M7XG5cbiAgICB0aGlzLmNwV2lkdGggPSBwYXJzZUludChjcFdpZHRoKTtcbiAgICB0aGlzLmNwSGVpZ2h0ID0gcGFyc2VJbnQoY3BIZWlnaHQpO1xuXG4gICAgdGhpcy5zZXJ2aWNlLmdldEFsbEZvbnRzKCdwb3B1bGFyaXR5Jykuc3Vic2NyaWJlKFxuICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hbGxGb250cyA9IGRhdGEuaXRlbXM7XG5cbiAgICAgICAgdGhpcy5sb2FkR29vZ2xlRm9udHMoZGF0YS5pdGVtcy5zbGljZSgwLCA5KSk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcbiAgICApO1xuICB9XG5cbiAgc2V0SW5pdGlhbEZvbnQoZm9udDogRm9udCkge1xuICAgIHRoaXMuaW5pdGlhbEZvbnQgPSBmb250O1xuXG4gICAgdGhpcy5zdHlsZXMgPSBmb250LnN0eWxlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9udCA9IHRoaXMuaW5pdGlhbEZvbnQ7XG5cbiAgICB0aGlzLmxpc3RlbmVyUmVzaXplID0gKCkgPT4geyB0aGlzLm9uUmVzaXplKCkgfTtcbiAgICB0aGlzLmxpc3RlbmVyTW91c2VEb3duID0gKGV2ZW50OiBhbnkpID0+IHsgdGhpcy5vbk1vdXNlRG93bihldmVudCkgfTtcblxuICAgIHRoaXMub3BlbkZvbnRQaWNrZXIoKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpXG4gICAgICAmJiBldmVudC50YXJnZXQgIT0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY2xvc2VGb250UGlja2VyKCk7XG4gICAgfVxuXG4gICAgLy9pZihldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT0gJ0FCQ0RFYWJjZGUxMjM0NUDigqwhPy0nKXsgfVxuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KVxuICAgIC8vdGhpcy5jaGFuZ2VJbnB1dChldmVudClcbiAgfVxuXG4gIG9uU2VsZWN0Rm9udChmb250OiBhbnkpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuZm9udC5zaXplO1xuXG4gICAgZm9udC5zaXplID0gc2l6ZTtcblxuICAgIHRoaXMuZm9udCA9IHtcbiAgICAgIGZhbWlseTogZm9udC5mYW1pbHksXG4gICAgICBzdHlsZXM6IGZvbnQudmFyaWFudHMsXG4gICAgICBmaWxlczogZm9udC5maWxlcyxcbiAgICAgIHN0eWxlOiAncmVndWxhcicsXG4gICAgICBzaXplOiBzaXplXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGZvbnQpO1xuICB9XG5cbiAgaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpOiBib29sZWFuIHtcbiAgICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvcGVuRm9udFBpY2tlcigpIHtcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcblxuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUZvbnRQaWNrZXIoKSB7XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pO1xuICB9XG5cbiAgdXBsb2FkRm9udEZpbGVzKCkge1xuICB9XG5cbiAgY2FuY2VsRm9udFNlbGVjdCgpIHtcbiAgICB0aGlzLmZvbnQgPSB0aGlzLmluaXRpYWxGb250O1xuXG4gICAgdGhpcy5jbG9zZUZvbnRQaWNrZXIoKTtcbiAgfVxuXG4gIGxvYWRHb29nbGVGb250cyhmb250czogRm9udFtdKSB7XG4gICAgdGhpcy5mb250cyA9IGZvbnRzLnNsaWNlKDAsIDkpO1xuXG4gICAgZm9udHMuZm9yRWFjaCgoZm9udCkgPT4ge1xuICAgICAgV2ViRm9udC5sb2FkKHtcbiAgICAgICAgZ29vZ2xlOiB7XG4gICAgICAgICAgZmFtaWxpZXM6IFtmb250LmZhbWlseV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIHNlYXJjaEdvb2dsZUZvbnRzKHZhbHVlOiBzdHJpbmcpe1xuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBsb2FkRm9udHM6IEZvbnRbXSA9IEFycmF5KCk7XG5cbiAgICBpZiAodGhpcy5hbGxGb250cykge1xuICAgICAgdGhpcy5hbGxGb250cy5mb3JFYWNoKGZvbnQgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZvbnQuZmFtaWx5LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgICAgICBmb250LmZhbWlseS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgIGxvYWRGb250cy5wdXNoKGZvbnQpO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmxvYWRHb29nbGVGb250cyhsb2FkRm9udHMpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZURpYWxvZ0JveChlbGVtZW50LCBvZmZzZXQpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApLFxuICAgICAgbGVmdDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApLFxuICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHNldERpYWxvZ1Bvc2l0aW9uKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHBhcmVudE5vZGUgPSBudWxsLCBwb3NpdGlvbiA9ICdzdGF0aWMnO1xuXG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwgJiYgbm9kZS50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgIHBvc2l0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZShcInBvc2l0aW9uXCIpO1xuXG4gICAgICBpZiAocG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICB2YXIgYm94RGlyZWN0aXZlID0gdGhpcy5jcmVhdGVEaWFsb2dCb3godGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpO1xuXG4gICAgICBpZiAocGFyZW50Tm9kZSA9PT0gbnVsbCkgeyBwYXJlbnROb2RlID0gbm9kZSB9XG5cbiAgICAgIGxldCBib3hQYXJlbnQgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChwYXJlbnROb2RlLCB0cnVlKTtcblxuICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wIC0gYm94UGFyZW50LnRvcDtcbiAgICAgIHRoaXMubGVmdCA9IGJveERpcmVjdGl2ZS5sZWZ0IC0gYm94UGFyZW50LmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBib3hEaXJlY3RpdmUgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXG4gICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3A7XG4gICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdDtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB0aGlzLmxlZnQgLT0gdGhpcy5jcFdpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLnRvcCAtPSB0aGlzLmNwSGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIHRoaXMuYXJyb3dUb3AgPSB0aGlzLmNwSGVpZ2h0IC0gMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIHRoaXMubGVmdCArPSBib3hEaXJlY3RpdmUud2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
