import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

personagens: any = [{
  
    "name": "luke skywalker",
    "height": "172",
    "gender": "male",
    "created": "2014-12-09T13:50:51.644000Z",
    "price": "29.99",
    "rating": "4.453"
  },
  {
    "name": "darth vader",
    "height": "202",
    "gender": "male",
    "created": "2014-12-20T13:50:51.644000Z",
    "price": "49.99",
    "rating": "4.999"
  }];



  constructor() { }

  ngOnInit(): void {
  }

}
