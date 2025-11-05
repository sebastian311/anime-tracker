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

/**
 * Fake Backend Interceptor
 *
 * This interceptor mocks backend API responses for development purposes.
 * It intercepts HTTP requests and returns mock data instead of calling a real backend.
 *
 * IMPORTANT: This should be REMOVED or DISABLED when integrating with real backend API.
 *
 * Current mocked endpoints:
 * - GET /api/anime-list - Returns mock anime data with 500ms delay
 *
 * TODO: When backend is ready:
 * 1. Remove this interceptor from app.module.ts providers
 * 2. Configure real API base URL in environment files
 * 3. Implement proper error handling for real API calls
 * 4. Add authentication token interceptor if needed
 * 5. Consider keeping this for development/testing purposes with feature flag
 *
 * Features:
 * - 500ms artificial delay to simulate network latency
 * - Returns mock data from mocked-data.ts
 * - Falls through to actual HTTP call for unmatched URLs
 */
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Intercept anime list endpoint
    if(request.url.endsWith('/api/anime-list')) {
      const response = new HttpResponse<any>({
        status: 200,
        body: mockedData
      });

      // Add 500ms delay to simulate network latency
      return of(response).pipe(delay(500));
    }

    // TODO: Add more mocked endpoints as needed during development
    // Example:
    // if(request.url.includes('/api/anime/')) { ... }
    // if(request.url.includes('/api/reviews')) { ... }

    // For all other requests, pass through to the actual HTTP handler
    return next.handle(request);
  }
}
