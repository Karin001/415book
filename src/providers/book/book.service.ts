import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../config';
import { URL } from './config';
// import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
// import {storageNames } from '../../config';
import { IndexStateModel, BookDetailStateModel } from '../../app/state/app.stateModel';
import { Observable } from 'rxjs/observable'
import { retry } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
@Injectable()
export class BookService {
  constructor(
    public http: HttpClient,
  ) { }
  getIndexBookList({ Cachable, x_refresh }): Observable<IndexStateModel> {
    return this.http.get<IndexStateModel>(baseApiUrl + URL.booklist, {
      headers: {
        'Content-Type': 'application/json',
        'Cachable': Cachable,
        'x-refresh': x_refresh
      }
    })
      .pipe(retry(3))
  }

  getBookDetail({ Cachable, x_refresh, idbook }): Observable<BookDetailStateModel> {
    return this.http.post<BookDetailStateModel>(baseApiUrl + URL.bookDetail, {
      idbook
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Cachable': Cachable,
          'x-refresh': x_refresh
        },

      })
      .pipe(retry(3))
  }
}
