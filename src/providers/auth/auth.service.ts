import { HttpClient, HttpResponse } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {storageNames} from '../../config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { retry } from 'rxjs/operators/retry';

import {baseApiUrl} from '../../config'
import {URL} from './config'
import * as Model from './auth.service.model';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }
  
  
  checkPhoneAuth(requestBody:Model.CheckPhoneAuthRequestBodyModel):Observable<Model.CheckPhoneAuthResponseBodyModel>{
    return this.http.post<Model.CheckPhoneAuthResponseBodyModel>(baseApiUrl + URL.checkPhoneCode, requestBody)
    .pipe(
    retry(5)
    )
  }
  saveAuthToken(token:string){
    return this.storage.set(storageNames.token,token);
  }
  deleteAuthToken(){
    return this.storage.remove(storageNames.token)
  }
  logIn(requestBody:Model.LogInRequstBodyModel):Observable<Model.LogInResponseBodyModel> {
    return this.http.post<Model.LogInResponseBodyModel>(baseApiUrl + URL.logIn, requestBody)
      .pipe(
      retry(5)
      )
  }

  signUp(requestBody:Model.SignUpRequesetBodyModel):Observable<Model.SignUpResponseBodyModel> {
    return this.http.post<Model.SignUpResponseBodyModel>(baseApiUrl + URL.signUp,requestBody)
    .pipe(
      retry(5),
    )
  }
  getPhoneCode(requestBody:Model.PhoneAuthRequestBodyModel):Observable<Model.PhoneAuthResponseBodyModel>{
    return this.http.post<Model.PhoneAuthResponseBodyModel>(baseApiUrl + URL.phoneCode,requestBody)
    .pipe(
      retry(5),
    )
  }
  resetPW(requestBody:Model.ResetPWRequestBodyModel):Observable<Model.ResetPWResponseBodyModel>{
    return this.http.post<Model.ResetPWResponseBodyModel>(baseApiUrl + URL.resetPW, requestBody)
    .pipe(
    retry(5),
    )
  }

}
