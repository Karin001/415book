import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../config';
import { URL } from './config';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/observable'
import { retry } from 'rxjs/operators'

import * as Model from './book.service.model';

function  setHeader(options: Model.Options) {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Cachable': options.Cachable.toString(),
    'x-refresh': options.x_refresh.toString(),
    'CacheProperty': options.CacheProperty
  })
}
@Injectable()
export class BookService {
  constructor(
    public http: HttpClient,
  ) { }
 
  getIndexBookList(options: Model.Options): Observable<Model.BookListResponseBodyModel> {
    return this.http.get<Model.BookListResponseBodyModel>(baseApiUrl + URL.booklist, {
      headers: setHeader(options)
    })
      .pipe(retry(3))
  }

  getBookDetail(options: Model.Options, requestBody: Model.BookDetailRequestBodyModel): Observable<Model.BookDetailResponseBodyModel> {
    return this.http.post<Model.BookDetailResponseBodyModel>(baseApiUrl + URL.bookDetail, requestBody, {
      headers: setHeader(options)
    })
      .pipe(retry(3))
  }

  getBookTypeList(options: Model.Options, requestBody: Model.BookTypeListRequestBodyModel): Observable<Model.BookTypeListResponseBodyModel> {
    return this.http.post<Model.BookTypeListResponseBodyModel>(baseApiUrl + URL.bookTypeList, requestBody, {
      headers: setHeader(options)
    })
      .pipe(retry(3))
  }
}
