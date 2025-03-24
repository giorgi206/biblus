import { Component } from '@angular/core';
import { iData } from '../../interfaces/bestsellers.model';
import { BestSellersService } from '../../services/best-sellers.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-bestsellers-carousel',
  templateUrl: './bestsellers-carousel.component.html',
  styleUrl: './bestsellers-carousel.component.css'
})
export class BestsellersCarouselComponent {
  books!: iData[];
  constructor(private _bestsellers:BestSellersService, private route:Router, private _cartService:CartService){
    _bestsellers.getBestsellersCard().subscribe((data) => {
      this.books = data.data;
      console.log(this.books);
      
    })
  }
  addToCart(product: iData, quantity: number) {

    this._cartService.addToCart(product, quantity);
  }

  
  // show(book: any){
  //   this.route.navigate(
  //     ["/routes"],
  //     {queryParams: book}
  //   )
  // }

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
