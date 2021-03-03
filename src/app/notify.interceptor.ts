import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotifierService } from './notifier.service';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {

  constructor(private notifier: NotifierService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET') {
      this.notifier.showNotification('Get data from server success', 'OK', 'success');
    } else if (request.method === 'DELETE') {
      this.notifier.showNotification('Delete item success', 'OK', 'error');
    }
    return next.handle(request);
  }
}
