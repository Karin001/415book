import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
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
  logInCheck(payload:string):Observable<boolean>{
    return this.http.post('http://127.0,0.1:8000/logInCheck', {payload})
    .pipe(
    retry(5),
    catchError((err):Observable<boolean> => {
      console.log(err);
      return of(false);
    }),
    exhaustMap((val):Observable<boolean> => {

      return of(true);
    })
    )
  }
  logIn(formval: Authentication_logIn):Observable<boolean> {
    return this.http.post('http://127.0,0.1:8000/logIn', { ...formval })
      .pipe(
      retry(5),
      catchError((err):Observable<boolean> => {
        return of(false);
      }),
      exhaustMap((data: User):Observable<boolean> => {
        if(data.payload) {
          this.remenberMe(data.payload);
        }
        this.logged.next({ ...data });
        return of(true);
      })
      )
  }
  logOut():Observable<boolean> {
    this.storage.remove('remenberMe');
    this.logged.next(false);
    return of(true)
  }
  signUp(formval:Authentication_signIn):Observable<boolean> {
    return this.http.post('http://127.0.0.1:8000/signUp',{...formval})
    .pipe(
      retry(5),
      catchError((err):Observable<boolean> => {
        return of(false);
      }),
      exhaustMap((data: User):Observable<boolean> => {
        if(data.payload) {
          this.remenberMe(data.payload);
        }
        this.logged.next({ ...data });
        return of(true);
      })
    )
  }
  getPhoneCode({code}){
    return this.http.post('http://127.0.0.1:8000/phoneCode',{code})
    .pipe(
      retry(5),
      map(src => true),
      catchError((err):Observable<boolean> => {
        return of(false);
       
      }),
   
    )
  }

}
