import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {retry} from 'rxjs/operators';
/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const CONFIG = 'dev';
const switchUrl = {
  dev:{
    getBookList_url:'assets/mockData/bookList.json',
    postBookDetail_url:'',
    areaData_url:'assets/mockData/areaData.json'
  },
  pro:{
    getBookList_url:''
  }
}
const apiUrl = switchUrl[CONFIG];
@Injectable()
export class RestApiProvider {
  bookListCache;
  bookListSubJect = new BehaviorSubject<string>(null);
  userAuthoritySubject = new BehaviorSubject<string>(null);
  userInfoCache;
  userInfoSubject = new BehaviorSubject<string>(null);
  userCartDataCache;
  userCartDataSubject = new BehaviorSubject<string>(null);
  bookDetailCache;
  bookDetailSubject = new BehaviorSubject<string>(null);
  areaDataCache;
  areaDataSubject = new BehaviorSubject<string>(null);
  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }
  getBookList(){
    this.http.get(apiUrl.getBookList_url)
    .retry(5)
    .subscribe(list => {
      this.bookListCache = list;
      this.bookListSubJect.next('success');
    })
  }
  watchBookList(){
    return this.bookListSubJect.asObservable();
  }
  getBookDetail(bookId){
    this.http.post(apiUrl.postBookDetail_url,{
      bookId
    })
  }
  watchBookDetail(){
    return this.bookDetailSubject.asObservable();
  }
  signIn(){

  }

  getAreaData(){
    this.http.get(apiUrl.areaData_url)
    .retry(5)
    .subscribe(list => {
      this.areaDataCache = list;
      this.areaDataSubject.next('success');
    })
  }
  watchAreaData(){
    return this.areaDataSubject.asObservable();
  }

}
