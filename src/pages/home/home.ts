import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookPage } from '../book/book';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannerImgs = [1, 2, 3]
  typeLists = [
    {
      typeName: "社科", books: [
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
    {
      typeName: "文学", books: [
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },  
    {
      typeName: "历史", books: [
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
    {
      typeName: "外语", books: [
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
        { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
        { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
      ]
    },
  ]
  constructor(public navCtrl: NavController) {

  }
  toBookPage(book){
    this.navCtrl.push(BookPage,{book});
  }
}
