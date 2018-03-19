import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IItem } from '../item';
import { DndListModule } from 'ngx-drag-and-drop-lists';

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
      'itemDescription': 'Taj Mahal',
      'count': 0,
      'imgUrl': 'https://png.pngtree.com/element_origin_min_pic/17/04/21/260ce3cbac1de7139b3efcb436e2a9cf.jpg',
      'disabled': false,
      'listMember': 1
    },
    {
      'uuid': '2',
      'itemDescription': 'Statue of Liberty',
      'count': 0,
      'imgUrl': 'https://png.pngtree.com/element_origin_min_pic/16/12/14/c4cc0b7a879d2f6d1e6178a6add41311.jpg',
      'disabled': false,
      'listMember': 1
    },
    {
      'uuid': '3',
      'itemDescription': 'Big Ben',
      'count': 0,
      'imgUrl': 'https://png.pngtree.com/element_origin_min_pic/00/16/04/1757138dcfae701.jpg',
      'disabled': false,
      'listMember': 1
    }
  ];
  list2: IItem[] = [
    {
      'uuid': '4',
      'itemDescription': 'Giza Pyramids',
      'count': 0,
      'imgUrl': 'https://png.pngtree.com/element_origin_min_pic/16/11/18/d47137f618ed9e181e66c8f5d4d7b71d.jpg',
      'disabled': false,
      'listMember': 2
    },
    {
      'uuid': '5',
      'itemDescription': 'Colosseum',
      'count': 0,
      'imgUrl': 'https://png.pngtree.com/element_origin_min_pic/16/11/13/858d14a6a5e8a9541fc43e6790185107.jpg',
      'disabled': false,
      'listMember': 2
    },
    {
      'uuid': '6',
      'itemDescription': 'Eiffel Tower',
      'count': 0,
      'imgUrl': 'https://png.pngtree.com/element_origin_min_pic/16/09/04/2257cc322307c02.jpg',
      'disabled': false,
      'listMember': 2
    }

  ];


  constructor() {

  }

  public updateCount(item: IItem): void {

    for ( let i = 0; i < this.list1.length; i++ ) {
      if (this.list1[i].count > 3 ) {
        this.list1[i].disabled = true;
      }
        if (item.uuid.match(this.list1[i].uuid)) {
          this.list1[i].count++;
          break;
        }
    }
      for (let j = 0; j < this.list2.length; j++) {
        if (this.list2[j].count > 3 ) {
          this.list2[j].disabled = true;
        }

        if (item.uuid.match(this.list2[j].uuid)) {
          this.list2[j].count++;
          break;
          }
        }
  }

  public removeItem(item: any, list: any[], index: number,  listNumber: number): void {
        list.splice(list.indexOf(item), 1);
        this.updateListMember();
  }

  public updateListMember() {
    for (let j = 0; j < this.list2.length; j++) {
        console.log(this.list2[j]);
        if (this.list2[j].listMember !== 2) {
          this.updateCount(this.list2[j]);
        }
        this.list2[j].listMember = 2;
      }
    for (let i = 0; i < this.list1.length; i++) {
      if (this.list1[i].listMember !== 1) {
          this.updateCount(this.list1[i]);
      }
      this.list1[i].listMember = 1;
    }
  }
}
