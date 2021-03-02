import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.method + ' ' + request.responseType);
    const httpReq = request.clone({
      // body: 'day la phuong thuc lay tat ca pet co trang thai la pending'
      setHeaders: {
        Authorization: 'Bearer xx.yy.zz'
      }
    });
    return next.handle(httpReq);
  }
}
