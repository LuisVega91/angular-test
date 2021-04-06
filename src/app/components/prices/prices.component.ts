import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  @Input() prices: any= [];

  constructor() { }

  ngOnInit(): void {
  }

}
