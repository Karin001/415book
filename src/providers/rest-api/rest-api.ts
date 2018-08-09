import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const CONFIG = 'dev';
const switchUrl = {
  dev: {
    getBookList_url: 'assets/mockData/bookList.json',
    postBookDetail_url: '',
    postBookTypeList_url: 'assets/mockData/bookTypeList.json',
    areaData_url: 'assets/mockData/areaData1.json',
    historyBooks_url: 'assets/mockData/historyBooks.json',
  },
  pro: {
    getBookList_url: '',
    postBookTypeList_url: '',
    postBookDetail_url: '',
    areaData_url: '',
    historyBooks_url: ''
  }
}
const apiUrl = switchUrl[CONFIG];
@Injectable()
export class RestApiProvider {
  bookListCache;
  bookListSubject = new Subject<string>();
  bookTypeListCache;
  bookTypeListSubject = new Subject();
  userAuthoritySubject = new BehaviorSubject<string>(null);
  userInfoCache;
  userInfoSubject = new BehaviorSubject<string>(null);
  userCartDataCache;
  userCartDataSubject = new BehaviorSubject<string>(null);
  bookDetailCache;
  bookDetailSubject = new BehaviorSubject<string>(null);
  areaDataCache;
  areaDataSubject = new BehaviorSubject<string>(null);
  constructor(
    public http: HttpClient,
    public platForm: Platform,
    public storage: Storage
  ) {
    console.log('Hello RestApiProvider Provider');
  }
  getBookList() {
    this.platForm.ready().then(() => {
      this.http.get(apiUrl.getBookList_url)
        .retry(5)
        .subscribe(list => {
          this.bookListCache = list;
          this.bookListSubject.next('success');
        })
    })

  }
  watchBookList() {
    return this.bookListSubject.asObservable();
  }
  getBookDetail(bookId) {
    this.http.post(apiUrl.postBookDetail_url, {
      bookId
    })
  }
  watchBookDetail() {
    return this.bookDetailSubject.asObservable();
  }
  getBooktypeList(typeName) {
    this.http.get(apiUrl.postBookTypeList_url)
      .retry(5)
      .subscribe(list => {
        this.bookTypeListCache = list;
        this.bookTypeListSubject.next(`success for ${typeName}`);
      })
  }
  watchBookTypeList() {
    return this.bookTypeListSubject.asObservable();
  }
  signIn() {

  }

  getAreaData() {
    this.http.get(apiUrl.areaData_url)
      .retry(5)
      .subscribe(list => {
        this.areaDataCache = list;
        this.areaDataSubject.next('success');
      })
  }
  watchAreaData() {
    return this.areaDataSubject.asObservable();
  }

  getHistoryBooks(callback) {
    this.http.get(apiUrl.historyBooks_url)
    .retry(5)
    .subscribe(data => {
      if(data) {
        this.storage.set('history',JSON.stringify(data));
        callback(data);
      }
    })
  }

}
