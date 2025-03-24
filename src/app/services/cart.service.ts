import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  totalPrice: number = 0;
  quantity: number = 0;
  constructor() { }
  getCart(){
    return this.cart;
  }
  addToCart(product: any, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.cart.push(product);
      this.totalPrice += product.p;
      this.quantity++;
    }
  }
}
