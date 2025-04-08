import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers: any[] = [
    {image: "https://apiv1.biblusi.ge/storage/offers/5c37s5H4xXCVDAUHgUWaLNmgcoRnfeosTzYezLXe.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/5c37s5H4xXCVDAUHgUWaLNmgcoRnfeosTzYezLXe.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/q5TNzu09ZsctdzW7Dj0SVmGQXtMSoykeGdrzhSdz.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/RDEWUeMnmdsYvsL47YvLy9dOmVn01zWs7Zha6gWS.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/V7584NkoAbgqubEgCCutp7wNmVtwZE5GG7KNQ0mV.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/5c37s5H4xXCVDAUHgUWaLNmgcoRnfeosTzYezLXe.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/dQwJU2ZloBT33B2QVDIYwKsmZ4GO0CJaR5amlKTv.png"},
    {image: "https://apiv1.biblusi.ge/storage/offers/ljbfwGhPVmkSo2j0tzeedTLWv6GrDF7ch9kXW6ja.png"},
  ]

  currentIndex = 0;
  visibleCards = window.innerWidth < 500 ? 2 : 4; 

  next() {
    if (this.currentIndex + this.visibleCards < this.offers.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
