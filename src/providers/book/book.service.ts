import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {storageNames } from '../../config';
import { IndexStateModel } from '../../app/state/app.stateModel';
import {Observable} from 'rxjs/observable'
import {of} from 'rxjs/observable/of'
@Injectable()
export class BookService {
  constructor(
    public http:HttpClient,
    public storage: Storage
  ) {}
  getIndexBookList():Observable<IndexStateModel>{
    this.storage.get(storageNames.index).then(value => {
      if(value) {
        return of(value)
      } else{
        return this.http
      }
    })
  }
}
