import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../../services/route.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book: any;
  inStock: boolean = false;
  route: any;
  constructor(private _route: ActivatedRoute, private _routeService: RouteService) {
    this.getRoute();
    this.fromApiNoticeBooks();

  }
  getRoute() {
    this._route.params.subscribe((params: any) => {
      this.route = params.id; 
      console.log(this.route);
      
    });
  }
  fromApiNoticeBooks() {
    this._routeService.booksNotice(this.route).subscribe((data: any) => {
      this.book = data;
      console.log(this.book);
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
