import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

   constructor(private http: HttpServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.http.getToken(); // get token from service/localStorage
    let authReq = req;

    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,   
          "name": "sandeep"
        },
        withCredentials: true   
      });
    }

    console.log(authReq.headers.get("Authorization") + " ------------------->>>");
    return next.handle(authReq);
  }
}