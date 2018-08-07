import { Component } from '@angular/core';

/**
 * Generated class for the CainixihuanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cainixihuan',
  templateUrl: 'cainixihuan.html'
})
export class CainixihuanComponent {

  text: string;
  test = [1,2,3]
  constructor() {
    console.log('Hello CainixihuanComponent Component');
    this.text = 'Hello World';
  }

}
