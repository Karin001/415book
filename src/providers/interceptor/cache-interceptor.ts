import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise'

import { tap, switchMap, concat } from 'rxjs/operators'

import { Storage } from '@ionic/storage';
const isCachable = (req: HttpRequest<any>) => {
    console.log('dddddddddd',req.headers,req.headers.get('Cachable')==='true' ? true : false)
    return req.headers.get('Cachable')==='true' ? true : false;
}
const isXrefresh = (req: HttpRequest<any>) => {
    console.log('3333333333',req.headers.get('x-refresh')==='true' ? true : false)
    return req.headers.get('x-refresh')==='true' ? true : false;
}
function sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: Storage): Observable<HttpEvent<any>> {

    // No headers allowed in npm search request

    console.log('event')
    return next.handle(req).pipe(
        tap(event => {
            console.log('cacheIN',event)
            // There may be other events besides the response.
            if (event instanceof HttpResponse && event.status === 200) {
                console.log('cacheIN',event.body)
                cache.set(req.headers.get('CacheProperty'), event.body); // Update the cache.
            }
        })
    );
}
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(
        public storage: Storage
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('32432423423423');
        if(isCachable(req)) {
            console.log('22222222222')
            const results$ = sendRequest(req, next, this.storage)
            const cacheData$ = fromPromise<HttpResponse<any>>(this.storage.get(req.headers.get('CacheProperty') ||'dds').then((value): Promise<any> => {
                console.log('value111111111111',value)
                if (!value) {
                    
                    return new Promise(res => {
                        const response = new HttpResponse({ status: 404 })
                        res(response)
                    })
                } else {
                    return new Promise(res => {
                        const response = new HttpResponse({ body: value })
                        res(value)
                    })
                }
            }))
         
          
            return cacheData$.pipe(
                switchMap(source => {
                    if (source) {
                        console.log('cached', source)
                        return cacheData$.pipe(

                            concat(results$)
                        )
                    } else {
                        console.log('havenot cached')
                        return results$
                    }
                })
            )
        } else if(isCachable(req)){
            const results$ = sendRequest(req, next, this.storage)
            return results$
        } else{
            console.log(111111111111111)
            return next.handle(req)
        }
        
    }
}
