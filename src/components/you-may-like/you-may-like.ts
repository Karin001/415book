import { Component } from '@angular/core';
/**
 * Generated class for the YouMayLikeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'you-may-like',
  templateUrl: 'you-may-like.html'
})
export class YouMayLikeComponent {
  lists = [
    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
  ];
  text: string;

  constructor() {
    console.log('Hello YouMayLikeComponent Component');
    this.text = 'Hello World';
  }
  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.lists.push(

        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },


      );

      infiniteScroll.complete(

      );
    }, 2000)
  }



}
