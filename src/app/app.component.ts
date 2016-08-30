import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  generation = 0;
  title = '我们行设备统计平台(测试)';
  list: Object[] = [];
  constructor() {
    for (var i = 0; i < 3; i++) {
      this.addItem(false);
    }
    console.log(this.list);
  }
  addItem(updateGeneration: boolean) {
    if (updateGeneration) {
      this.generation++;
    }
    this.list.splice(this._randomIndex(), 0, {
      'device_sn': this._randomDeviceSn(),
      'net_card_num': this._randomNetCardNum(),
      'class': ['的士','公交','警车'][this._randomNum(0,2)],
    });
  }
  //关键就是这个getKeys方法，得自己写，真他妈的
  getKeys(item){
      return Object.keys(item);
  }
  _randomIndex(): number {
    return Math.floor(Math.random() * this.list.length);
  }
  
  _randomDeviceSn(): string {
    return 'A1608100' + this._randomNum(1000,9999);
  }
  
  _randomNetCardNum(): number {
    return this._randomNum(1060900000000,1060999999999);//['的士','公交','警车'][this._randomNum(0,3)];
    // return ['的士','公交','警车'][this._randomNum(0,3)];
  }
  _randomNum(min,max): number {
    return parseInt(Math.random()*(max-min+1)+min,10);
    //return Math.floor(Math.random()*(max-min+1)+min);//Or
  }
}
