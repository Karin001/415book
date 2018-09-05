import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise'

import { tap, switchMap, concat } from 'rxjs/operators'

import { Storage } from '@ionic/storage';
const isCachable = (req: HttpRequest<any>) => {
    return req.headers.get('Cachable') === 'true' ? true : false;
}
const isXrefresh = (req: HttpRequest<any>) => {
    return req.headers.get('x-refresh') === 'true' ? true : false;
}
function sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: Storage): Observable<HttpEvent<any>> {
        console.log('shoudnt be here')
    // No headers allowed in npm search request
    return next.handle(req).pipe(
        tap(event => {
            console.log('shoudnt be here')
            // There may be other events besides the response.
            if (event instanceof HttpResponse && event.status === 200) {
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
        if (isCachable(req)) {
            console.log('get in cache refresh')
            
            const cacheData$ = fromPromise<HttpResponse<any>>(this.storage.get(req.headers.get('CacheProperty') || 'dds').then((value): Promise<any> => {
                if (!value) {

                    return new Promise(res => {
                        const response = new HttpResponse({ status: 404 })
                        res(response)
                    })
                } else {
                    return new Promise(res => {
                        console.log('find cachedata in cachable',req.headers.get('CacheProperty'), value)
                        const response = new HttpResponse({ body: value })
                        res(response)
                    })
                }
            }))

            if (isXrefresh(req)) {
                const results$ = sendRequest(req, next, this.storage)
                return cacheData$.pipe(
                    switchMap(source => {
                        if (source.status === 200) {
                           
                            console.log('find cache data in xrefresh', source)
                            return cacheData$.pipe(

                                concat(results$)
                            )
                        } else {
                            console.log('havenot cached')
                            return results$
                        }
                    })
                )
            }  else {
                return cacheData$.pipe(
                    switchMap(source => {
                        if (source.status === 200) {
                            console.log('find cache data', source)
                            return cacheData$
                        } else {
                            console.log('havenot cached')
                            const results$ = sendRequest(req, next, this.storage)
                            return results$
                        }
                    })
                )
            } 

        }else {
            return next.handle(req)
        }

    }
}
