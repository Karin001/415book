import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError((err) =>{
                console.error('http error',err)
                const res = new HttpResponse({body:{}});
                return of(res)
            })
        )
    }   
}