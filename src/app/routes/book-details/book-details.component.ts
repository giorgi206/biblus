import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book: any;
  inStock: boolean = false;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.book = params;
      console.log(this.book);
      if(this.book.stockOrNot == '1'){
        this.inStock = true;
      }
    });
    
  }
  minus(){
    if(this.counter > 1){
      this.counter--;
    }
  }
  plus(){
    this.counter++;
  }
  counter: number = 1;
  
}
