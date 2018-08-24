import { Component, OnInit } from '@angular/core';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
@Component({
    selector: 'app-cart',
    templateUrl: 'app-cart.html',
    
})
export class CartComponent implements OnInit {
    cartBookNums;
    constructor(
        public restApi: RestApiProvider
    ) { }

    ngOnInit(): void { 
        // this.restApi.getCartBooks((data)=>{
        //     this.cartBookNums = data
        // })
        // this.restApi.watchCartBooks().subscribe(change => {
        //     if(change) {
        //         this.cartBookNums = this.restApi.cartBooksCache.length
        //     }
        // })
    }
}
