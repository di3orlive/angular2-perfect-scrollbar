import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import { Font, Result } from './classes';
export declare class FontPickerService {
    private config;
    private http;
    private apiKey;
    private baseUrl;
    constructor(config: any, http: Http);
    getAllFonts(sort: string): Observable<Result>;
    getRequestedFont(family: string): Observable<Font>;
    private handleHttpError(error);
}
