import { Component } from '@angular/core';
import { BestSellersService } from '../../services/best-sellers.service';
import { iData } from '../../interfaces/bestsellers.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-best-sellers',
  templateUrl: './route-best-sellers.component.html',
  styleUrl: './route-best-sellers.component.css'
})
export class RouteBestSellersComponent {
  books!: iData[];
  constructor(private _bestsellers:BestSellersService, private route:Router){
    _bestsellers.getBestsellersCard().subscribe((data) => {
      this.books = data.data;
      
    })
  }
  


             //carousel
  currentIndex = 0;
  visibleCards = 4; 

  next() {
    if (this.currentIndex + this.visibleCards < this.books.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
