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
    console.log(`Req Method is ` + request.method);
    const httpReq = request.clone({
      // body: 'day la phuong thuc lay tat ca pet co trang thai la pending'
    });
    console.log(httpReq);
    return next.handle(httpReq);
  }
}
