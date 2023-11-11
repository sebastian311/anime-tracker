import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { mockedData } from '../mock/mocked-data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.endsWith('/api/anime-list')) {
      const response = new HttpResponse<any>({
        status: 200,
        body: mockedData
      });

      return of(response).pipe(delay(500));
    }
    
    return next.handle(request);
  }
}
