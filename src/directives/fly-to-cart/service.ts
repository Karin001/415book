import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
@Injectable()
export class BtnClickService {
    clicked = new Subject<boolean>()
    shake = new Subject<boolean>()
    constructor() {
    }

    emmit(){
        this.clicked.next(true);
        setTimeout(()=>{
            this.shake.next(true);
        },1000)
    }
    watch():Observable<boolean>{
        return this.clicked.asObservable()
    }
    toBeShaked():Observable<boolean>{
        return this.shake.asObservable();
    }
}