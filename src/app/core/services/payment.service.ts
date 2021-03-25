import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// Api Links for development of Payment Service
// const url = "http://localhost:3000";
const url = "https://dto-backend.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private _http: HttpClient) { }
    // Post DTO data with rxjs
    messageToAdmin(meta:any) {
      return this._http.post(`${url}/save-dto`, meta ,{
        observe: 'body',
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      }
      ).pipe(catchError(err => {
        return throwError(err);
      }));  
    }
}
