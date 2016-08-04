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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Observable_1 = require("rxjs/Observable");
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var interfaces_1 = require('./interfaces');
var FontPickerService = (function () {
    function FontPickerService(config, http) {
        this.config = config;
        this.http = http;
        this.apiKey = "";
        this.baseUrl = 'https://www.googleapis.com/webfonts/v1/webfonts';
        this.apiKey = config.apiKey;
    }
    /*
      Return all fonts avaliable from google fonts, may have sort parameter:
      date || alpha || style || trending || popularity
    */
    FontPickerService.prototype.getAllFonts = function (sort) {
        var requestUrl = this.baseUrl + '?key=' + this.apiKey;
        if (sort) {
            requestUrl = requestUrl.concat('&sort=' + sort);
        }
        return this.http.get(requestUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleHttpError);
    };
    /*
      Return observable of the requested font
    */
    FontPickerService.prototype.getRequestedFont = function (family) {
        var requestUrl = 'https://fonts.googleapis.com/css?family=' + family;
        return this.http.get(requestUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleHttpError);
    };
    FontPickerService.prototype.handleHttpError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    FontPickerService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(interfaces_1.FontPickerConfig)), 
        __metadata('design:paramtypes', [Object, http_1.Http])
    ], FontPickerService);
    return FontPickerService;
}());
exports.FontPickerService = FontPickerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbnQtcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFFakMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBRW5ELHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUl4RCwyQkFBaUMsY0FBYyxDQUFDLENBQUE7QUFHaEQ7SUFLRSwyQkFBK0MsTUFBTSxFQUFVLElBQVU7UUFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKakUsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixZQUFPLEdBQVcsaURBQWlELENBQUM7UUFHMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O01BR0U7SUFFSyx1Q0FBVyxHQUFsQixVQUFtQixJQUFZO1FBQzdCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFFckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUNqRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzthQUM3QixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztNQUVFO0lBRUssNENBQWdCLEdBQXZCLFVBQXdCLE1BQWM7UUFDcEMsSUFBSSxVQUFVLEdBQUcsMENBQTBDLEdBQUcsTUFBTSxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7YUFDN0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTywyQ0FBZSxHQUF2QixVQUF3QixLQUFVO1FBQ2hDLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUUxRSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTVDSDtRQUFDLGlCQUFVLEVBQUU7bUJBTUcsYUFBTSxDQUFDLDZCQUFnQixDQUFDOzt5QkFOM0I7SUE2Q2Isd0JBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLHlCQUFpQixvQkE0QzdCLENBQUEiLCJmaWxlIjoiZm9udC1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgRm9udCwgUmVzdWx0IH0gZnJvbSAnLi9jbGFzc2VzJztcblxuaW1wb3J0IHsgRm9udFBpY2tlckNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb250UGlja2VyU2VydmljZSB7XG4gIHByaXZhdGUgYXBpS2V5OiBzdHJpbmcgPSBcIlwiO1xuXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3dlYmZvbnRzL3YxL3dlYmZvbnRzJztcblxuICBjb25zdHJ1Y3RvciggQEluamVjdChGb250UGlja2VyQ29uZmlnKSBwcml2YXRlIGNvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwICkge1xuICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qXG4gICAgUmV0dXJuIGFsbCBmb250cyBhdmFsaWFibGUgZnJvbSBnb29nbGUgZm9udHMsIG1heSBoYXZlIHNvcnQgcGFyYW1ldGVyOlxuICAgIGRhdGUgfHwgYWxwaGEgfHwgc3R5bGUgfHzCoHRyZW5kaW5nIHx8IHBvcHVsYXJpdHlcbiAgKi9cblxuICBwdWJsaWMgZ2V0QWxsRm9udHMoc29ydDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXN1bHQ+e1xuICAgIGxldCByZXF1ZXN0VXJsID0gdGhpcy5iYXNlVXJsICsgJz9rZXk9JyArIHRoaXMuYXBpS2V5XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwuY29uY2F0KCcmc29ydD0nICsgc29ydClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZXF1ZXN0VXJsKVxuICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlSHR0cEVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAgUmV0dXJuIG9ic2VydmFibGUgb2YgdGhlIHJlcXVlc3RlZCBmb250XG4gICovXG5cbiAgcHVibGljIGdldFJlcXVlc3RlZEZvbnQoZmFtaWx5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZvbnQ+e1xuICAgIGxldCByZXF1ZXN0VXJsID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgZmFtaWx5O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmVxdWVzdFVybClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVIdHRwRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVIdHRwRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
