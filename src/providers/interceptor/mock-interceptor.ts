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

      return of(fromMock.BookTypeListResponse)
    case baseApiUrl + restApiUrl.phoneCode:
      return of(fromMock.PhoneAuthResponse)
    case baseApiUrl + restApiUrl.logIn:
      return of(fromMock.LoginResponse)
    case baseApiUrl + restApiUrl.resetPW:
      return of(fromMock.ResetPWResponse)
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
    console.log('req.url',req.url)
    if (environment_production) {
      console.log('hhhher')
      return next.handle(req)
    } else if(req.url === restApiUrl.areaData_url){
      console.log('mock skip')
      return next.handle(req)
    }else{
      console.log('not skip mock')
      return mockResfn(req)
    }
  }
}
