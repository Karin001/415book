import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndexBooklistElement } from '../../app/model/indexBooklist';
import { BehaviorSubject, Subject } from 'rxjs';
import 'rxjs/add/operator/retry';
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
    cartBooks_url:'assets/mockData/cartBooks.json',
  },
  pro: {
    getBookList_url: '',
    postBookTypeList_url: '',
    postBookDetail_url: '',
    areaData_url: '',
    historyBooks_url: '',
    cartBooks_url:'',
  }
}

const apiUrl = switchUrl[CONFIG];
const storageNames = {
  index: 'index_book_list',
  history: 'book_type_history_list',
  skill: 'book_type_skill_list',
  sports: 'book_type_sports_list',
  eng: 'book_type_eng_list',
  child: 'book_type_child_list',
  gijuzu: 'book_type_gijuzu_list',
  bungaku: 'book_type_bungaku_list',
  shakai: 'book_type_shakai_list',
  hot: 'hot_book_list',
  new: 'new_book_list',
  areaData: 'area_data',
  
}
const LIMIT = 1000 * 60 * 10 //10min
@Injectable()
export class RestApiProvider {
  cartBooksCache;
  cartBookChange = new BehaviorSubject<boolean>(null);
  constructor(
    public http: HttpClient,
    public platForm: Platform,
    public storage: Storage
  ) {
    console.log('Hello RestApiProvider Provider');
  }
  setStorage(name: string, data: any) {
    data.lastTime = Date.now();
    this.storage.set(name, JSON.stringify(data));
  }
  async getIndexBookList(callbackFn) {
    await this.platForm.ready();
    const stringifyData = await this.storage.get(storageNames.index);
    if(stringifyData) {
      const data = JSON.parse(stringifyData);
      if(data.lastTime && Date.now() - data.lastTime < LIMIT) {
        callbackFn(data);
        return;
      }
    };
    this.http.get("assets/mockData/bookList.json")
      .retry(5)
      .subscribe((list:IndexBooklistElement[]) => {
        if (!list) {
          throw new Error('获取首页图书数据为空')
        }
        this.setStorage(storageNames.index, list);
        callbackFn(list);
      })

  }
  getBookDetail(bookId, callbackFn) {
    this.http.post(apiUrl.postBookDetail_url, {
      bookId
    })
      .retry(5)
      .subscribe(detail => {
        if (!detail) {
          throw new Error('获取的图书详情数据为空')
        }
        callbackFn(detail);
      })
  }

  async getBooktypeList(typeName,callbackFn) {
    const stringifyData = await this.storage.get(storageNames[typeName]);
    if(stringifyData) {
      const data = JSON.parse(stringifyData);
      if(data.lastTime && Date.now() - data.lastTime < LIMIT) {
        callbackFn(data);
        return;
      }
    };
    this.http.get(apiUrl.postBookTypeList_url)
      .retry(5)
      .subscribe(list => {
        if (!list) {
          throw new Error('获取到的该类图书列表数据为空')
        }

        this.setStorage(storageNames[typeName],list);
        callbackFn(list);
      })
  }

  signIn() {

  }

  async getAreaData(callbackFn) {
    const stringifyData = await this.storage.get(storageNames.areaData);
    if(stringifyData) {
      const data = JSON.parse(stringifyData);
      if(data.lastTime && Date.now() - data.lastTime < LIMIT) {
        callbackFn(data);
        return;
      }
    };
    this.http.get(apiUrl.areaData_url)
      .retry(5)
      .subscribe(list => {
        this.setStorage(storageNames.areaData,list);
        callbackFn(list);
      })
  }


  getHistoryBooks(callbackFn) {
    this.http.get(apiUrl.historyBooks_url)
      .retry(5)
      .subscribe(data => {
        if (data) {
          callbackFn(data);
        }
      })
  }
  getCartBooks(callbackFn) {
    this.http.get(apiUrl.cartBooks_url)
      .retry(5)
      .subscribe(data => {
        if (data) {
          this.cartBooksCache = {...data};
          callbackFn(data);
        }
      })
  }
  addCartBook(book){
    this.cartBooksCache.push(book);
    this.cartBookChange.next(true);
  }
  watchCartBooks(){
    return this.cartBookChange.asObservable();
  }

}
