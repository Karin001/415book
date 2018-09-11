import { environment_production } from '../../config'
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse,HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw'
import { baseApiUrl, restApiUrl } from '../../config';
import * as fromMock from '../../mock'
const mockResfn = (req: HttpRequest<any>): Observable<HttpEvent<any>> => {

  switch (req.url) {
    case baseApiUrl + restApiUrl.booklist:
      const res = new HttpResponse({ body: fromMock.booklistResbody,status:200 })
      console.log('111111111',req.url)
      return of(res)

    case baseApiUrl + restApiUrl.bookDetail:
      const res_detail = new HttpResponse({ body: fromMock.bookDetailResbody,status:200 })
      console.log('2222222222',req.url)
      return of(res_detail)
    case baseApiUrl + restApiUrl.logIn:
      return 
    case baseApiUrl + restApiUrl.phoneCode:

      return Math.random()>0.5? _throw(fromMock.PhoneAuthErrorResponse):of(fromMock.PhoneAuthResponse)
    default:
    console.log('3333333333333',req.url,baseApiUrl + restApiUrl.bookDetail)
      const res1 = new HttpResponse({ body: fromMock.booklistResbody })
      return of(res1)
  }
}
@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (environment_production) {
      console.log('hhhher')
      return next.handle(req)
    } else {
      return mockResfn(req)
    }
  }
}
