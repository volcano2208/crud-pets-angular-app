import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorpageRedirectInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.router.navigateByUrl('404page');
        } else if (
          error.status === 500
        ) {
          console.log('Lỗi server');
        }
        console.log('error is intercept');
        return throwError(error.message);
      })
    );
  }
}
