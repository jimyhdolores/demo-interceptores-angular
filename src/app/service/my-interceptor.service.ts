
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("***INTERCEPTANDO***");

    let request = req;

    request = req.clone({
      setHeaders: {
        demo: "esto es una demo"
      }
    });

    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          console.log(evt);
        }

      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          console.log("Este es un error 404 ¿que desea realizar?");
        }
        return throwError(err);
      })
    );
  }
}