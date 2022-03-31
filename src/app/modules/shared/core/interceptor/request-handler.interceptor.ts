import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RequestHandlerInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    request = request.clone({
      headers: request.headers.set('authorization', `Bearer ${token}`),
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => this.toastrService.error(`${error.error.message}`, 'Erro'));
      })
    );
  }
}
