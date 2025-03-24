import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isVisible = false;
  cart: any[];
  totalPrice: number;
  quantity: number;
  constructor(private _cartService:CartService){
    this.cart = this._cartService.getCart();
    this.totalPrice = this._cartService.totalPrice;
    this.quantity = this._cartService.quantity
  }
  toggleVisibility() {
    this.isVisible = !this.isVisible;
    const cartItems = document.querySelector('.cart-items') as HTMLElement;
    if (cartItems) {
      if (this.isVisible) {
        cartItems.classList.add('active');
      } else {
        cartItems.classList.remove('active');
      }
    }
    console.log(this.totalPrice);
    console.log(this.quantity);
    
    
  }
  
}
