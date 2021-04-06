import { OffersService } from './services/offers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  characteristics: any = [];
  prices: any = [];

  constructor(private offersService: OffersService) {

  }

  getOffer(id) {
    this.offersService.getById(id).subscribe(resp => {
      this.characteristics = resp?.versions[0]?.characteristics;
      this.prices = resp?.versions[0]?.productOfferingPrices;
    });
  }


}
