import { environment_production } from '../../config'
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse,HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw'
import { baseApiUrl, restApiUrl } from '../../config';
import * as fromMock from '../../mock'
const mockResfn = (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
  console.error(req.url)
  switch (req.url) {
  
    case baseApiUrl + restApiUrl.booklist:
      const res = new HttpResponse({ body: fromMock.booklistResbody,status:200 })
      return of(res)

    case baseApiUrl + restApiUrl.bookDetail:
      const res_detail = new HttpResponse({ body: fromMock.bookDetailResbody,status:200 })
      return of(res_detail) 
    case baseApiUrl + restApiUrl.bookType:
    console.error('213123123123123123')
      return Math.random()>0.9? _throw(fromMock.BookTypeListErrorResponse):of(fromMock.BookTypeListResponse)
    case baseApiUrl + restApiUrl.phoneCode:
      return Math.random()>0.5? _throw(fromMock.PhoneAuthErrorResponse):of(fromMock.PhoneAuthResponse)
    case baseApiUrl + restApiUrl.logIn:
      return Math.random()>0.5? _throw(fromMock.LogInErrorResponse):of(fromMock.LoginResponse)
    case baseApiUrl + restApiUrl.resetPW:
      return Math.random()>0.5? _throw(fromMock.ResetPWErrorResponse):of(fromMock.ResetPWResponse)
    case baseApiUrl + restApiUrl.signUp:
    console.log('signUp!')
      return Math.random()>0.5? _throw(fromMock.SignUpErrorResponse):of(fromMock.SignUpResponse)
    case baseApiUrl + restApiUrl.checkPhoneCode:
      return Math.random()>0.5? _throw(fromMock.CheckPhoneAuthErrorResponse):of(fromMock.CheckPhoneAuthResponse)
    default:
    console.log(234234234234234234234234234234234)
      return of(fromMock.ResetPWResponse)
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
