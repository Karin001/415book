import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Subscription } from 'rxjs';
/**
 * Generated class for the CityPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const types = ['sheng','shi','qu'];
@IonicPage()
@Component({
  selector: 'page-city-picker',
  templateUrl: 'city-picker.html',
})
export class CityPickerPage {
  sheng;
  shi;
  qu;
  step;
  properties:string[] = [];
  default = '请选择';
  display = {type:'',list:[]};
  shiCache;
  quCache;
  $stream:Subscription;
  data:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public rest:RestApiProvider) {
    const selectedData:string = this.navParams.get('data');
    if(selectedData !== ''){
      this.properties = selectedData.split(' ');
      console.log('sssssss',this.properties);
    }
    this.rest.getAreaData((list)=>{
      this.data = list;
      console.log('dddddddddddd',this.data)
      if(!this.properties || this.properties.length === 0) {
        console.log('here',this.properties);
        this.properties[0] = this.default;
        setTimeout(()=>{this.step = 0;})
        this.display['type'] = 'sheng'
        this.display['list'] = this.data.map(ele => ele.name);
        console.log(this.properties);
      } else {
        if(this.properties.length === 1) {
          console.log('there',this.properties);
          this.properties[1] = this.default;
          setTimeout(()=>{this.step = 1;})
          this.findShi(this.properties[0]);
        } else {
          console.log('there2',this.properties);
          if(this.properties.length === 2) {
            this.properties[2] = this.default;
          }
          setTimeout(()=>{this.step = 2;})
          this.findShi(this.properties[0]);
          this.findQu(this.properties[1]);
        }

      }
    })




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPickerPage');
  }
  dismiss(data = []) {
    data = data.filter(ele => ele !== this.default);
    this.viewCtrl.dismiss(data);

  }
  findSheng(){
    this.display['type'] = 'sheng';
    this.display['list'] = this.data.map(ele => ele.name);
  }
  findShi(name){
    this.display.type = 'shi';
    this.shiCache = this.data.find(ele => ele.name === name).city;
    this.display.list = this.shiCache.map(ele => ele.name);
  }
  findQu(name){
    this.display.type = 'qu';
    this.quCache = this.shiCache.find(ele => ele.name === name).area;
    this.display.list = this.quCache;
  }
  reSel(index,name){
    this.properties[index] = this.default;
    setTimeout(()=>{this.step = index;});
    const popToEnd = ()=>{
      if(this.properties.length> index+1){
        this.properties.pop();
        popToEnd();
      }else{
        return
      }
    }
    popToEnd();
    this.display.type = types[index];
    if(index === 0 ){
      console.log('0')
      this.findSheng();
      console.log(this.display);
    } else if(index === 1) {
      console.log('1');
      this.findShi(name);
    }

  }
  handleSel(name) {
    const lth =  this.properties.length;

    if(lth<3) {
      this.properties[lth-1] = name;
      this.properties[lth] = this.default;
      setTimeout(()=>{this.step = lth;});
      if(lth === 1){
        this.findShi(name);
      } else if(lth === 2) {
        this.findQu(name);
      } else{

      }
    } else{
      this.properties[2] = name;
      this.step = 2;
      console.log('3jie',this.properties);
      this.dismiss(this.properties);
    }
  }
}
