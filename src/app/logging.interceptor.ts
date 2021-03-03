import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { PetService } from './pet.service';
import { finalize, switchMap } from 'rxjs/operators';
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(public loaderService: PetService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    return timer(2000).pipe(switchMap(() => next.handle(request).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    )));
  }
}

