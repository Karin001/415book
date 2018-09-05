import { HttpClient, HttpResponse } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {storageNames} from '../../config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { retry } from 'rxjs/operators/retry';
import { concat } from 'rxjs/operators/concat';
import { catchError } from 'rxjs/operators/catchError';
import { exhaustMap } from 'rxjs/operators/exhaustMap';
import { map } from 'rxjs/operators/map';
import { of } from 'rxjs/observable/of';
import { Authentication_logIn, Authentication_signIn, User } from '../../app/model/auth';
import {baseApiUrl,restApiUrl} from '../../config'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  logged = new BehaviorSubject<{ username: string;payload?:string }|boolean>(false);

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }
  watchLogged(){
    return this.logged.asObservable();
  }
  remenberMe(payload:string) {
    this.storage.set('remenberMe',payload);
  }
  logInCheck(payload){
    return this.http.post('http://127.0.0.1:8000/logInCheck', {payload})
    .pipe(
    retry(5),
    exhaustMap((val):Observable<boolean> => {

      return of(true);
    }),
    catchError((err):Observable<boolean> => {
      console.log(err);
      return of(true);
    })
    )
  }
  codeCheck({phone,code}):Observable<boolean>{
    return this.http.post('http://127.0.0.1:8000/codeCheck', {phone,code})
    .pipe(
    retry(5),
    exhaustMap((val):Observable<boolean> => {

      return of(true);
    }),
    catchError((err):Observable<boolean> => {
      console.log(err);
      return of(true);
    })
    )
  }
  saveAuthToken(token:string){
    this.storage.set(storageNames.token,token);
  }
  logIn(formVal:{phone:string;password:string}):Observable<any> {
    return this.http.post<any>('', formVal)
      .pipe(
      retry(5)
      )
  }
  logOut():Observable<boolean> {
    this.storage.remove('remenberMe');
    this.logged.next(false);
    return of(true)
  }
  signUp(formval:Authentication_signIn):Observable<{success:boolean;payload:any}> {
    return this.http.post('http://127.0.0.1:8000/signUp',{...formval})
    .pipe(
      retry(5),
     
      exhaustMap((data: User)=> {
        if(data.payload) {
          this.remenberMe(data.payload);
        }
        this.logged.next({ ...data });
        return of({success:true,payload:null});
      }),
      catchError((err) => {
        console.log('errrrr',err instanceof String, err);
        return of({success:false,payload:err});
      })
    )
  }
  getPhoneCode({phone}){
    return this.http.post('http://127.0.0.1:8000/phoneCode',{phone})
    .pipe(
      retry(5),
      map(src => true),
      catchError((err):Observable<boolean> => {
        return of(true);
       
      })
   
    )
  }
  resetPW({phone,code,password}):Observable<boolean>{
    return this.http.post('http://127.0.0.1:8000/restPW', {phone,code,password})
    .pipe(
    retry(5),
    exhaustMap((val):Observable<boolean> => {
      this.logged.next({username:'yohaha'})
      return of(true);
    }),
    catchError((err):Observable<boolean> => {
      console.log(err);
      this.logged.next({username:'yohaha你好'})
      return of(true);
    })
    )
  }

}
