import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse) =>{
                console.log('errrrrrrrrrrrrrrr',error)
                if (error.error instanceof ErrorEvent) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.error('An error occurred:', error.error.message);
                  } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.error(
                      `Backend returned code ${error.status}, ` +
                      `body was: ${JSON.stringify(error.error)}`);
                  }

                const mockRes = new HttpResponse({body:error.error||{errorInfo:'网络错误',success:false} });
                return of(mockRes)
            })
        )
    }   
}