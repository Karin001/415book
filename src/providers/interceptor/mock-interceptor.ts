import { environment_production } from '../../config'
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { baseApiUrl, restApiUrl } from '../../config';
import * as fromMock from '../../mock'
const mockResfn = (req: HttpRequest<any>): HttpResponse<any> => {

  switch (req.url) {
    case baseApiUrl + restApiUrl.booklist:
      const res = new HttpResponse({ body: fromMock.booklistResbody,status:200 })
      return res

    case baseApiUrl + restApiUrl.bookDetail:
      const res_detail = new HttpResponse({ body: fromMock.bookDetailResbody,status:200 })
      return res_detail
    default:
      const res1 = new HttpResponse({ body: fromMock.booklistResbody })
      return res1
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
      console.log('therrrr', mockResfn(req))
      return of(mockResfn(req))
    }
  }
}
