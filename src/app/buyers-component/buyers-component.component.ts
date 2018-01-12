import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';

@Component({
  selector: 'app-buyers-component',
  templateUrl: './buyers-component.component.html',
  styleUrls: ['./buyers-component.component.css']
})
export class BuyersComponentComponent implements OnInit {

  newBuyer={};
  bayers:Array<Object>;

  constructor() { 
    this.bayers[

     new Buyer('1','Marko','Markovic', 'marko@nesto.com',[]),
     new Buyer('2','Petar','Peric', 'petric@vbca.com',[]),
     new Buyer('3','Slavko','Slavkovic', 'SavaSavko@nbt.com',[])

  ];
  }

  ngOnInit() {
  }

}
