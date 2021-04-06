import { OffersService } from './../../services/offers.service';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @ViewChild('offerSelector') offerSecector: ElementRef;

  @Output() updateOfferId: EventEmitter<any> = new EventEmitter();

  offers: any = [];
  slectedOffer: any = null;

  offerId: any = null;
  offerName: any = null;

  constructor(
    private offersService: OffersService,
  ) {

  }

  ngOnInit(): void {
    this.offersService.get().subscribe(offers => {
      this.offers = offers;
      console.log(this.offers[0]?.id);
    });
  }

  update() {
    this.offerId = this.offerSecector.nativeElement.value;
    this.offerName = this.offerSecector.nativeElement.selectedOptions[0].innerText;
    this.updateOfferId.emit(this.offerId);
  }

}
