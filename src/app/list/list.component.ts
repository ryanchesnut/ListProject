import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ListComponent {

  list1: IItem[] = [
    {
      'uuid': '1',
      'itemDescription': 'item1',
      'count': 0,
      'imgUrl': 'http://via.placeholder.com/50x50'
    },
    {
      'uuid': '2',
      'itemDescription': 'item2',
      'count': 0,
      'imgUrl': 'http://via.placeholder.com/50x50'
    },
    {
      'uuid': '3',
      'itemDescription': 'item3',
      'count': 0,
      'imgUrl': 'http://via.placeholder.com/50x50'
    }
  ];
  list2: IItem[] = [
    {
      'uuid': '4',
      'itemDescription': 'item4',
      'count': 0,
      'imgUrl': 'http://via.placeholder.com/50x50'
    },
    {
      'uuid': '5',
      'itemDescription': 'item5',
      'count': 0,
      'imgUrl': 'http://via.placeholder.com/50x50'
    },
    {
      'uuid': '6',
      'itemDescription': 'item6',
      'count': 0,
      'imgUrl': 'http://via.placeholder.com/50x50'
    }

  ];


  constructor() {

  }

  public updateCount(item: IItem, list: IItem[]): void {
    console.log(item.itemDescription);
    for ( let i = 0; i < this.list1.length; i++ ) {
        if (item.uuid.match(this.list1[i].uuid)) {
          this.list1[i].count++;
          break;
        }
    }
      for (let j = 0; j < this.list2.length; j++) {
        if (item.uuid.match(this.list2[j].uuid)) {
          this.list2[j].count++;
          break;
        }
      }
  }

  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
    this.updateCount(item, list);
  }
}
