import { Component } from '@angular/core';
import { TopData } from '../../interfaces/top.model';
import { TopbookService } from '../../services/topbook.service';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.component.html',
  styleUrl: './top-books.component.css'
})
export class TopBooksComponent {
  books!: TopData[];
  constructor(private _topBooksService:TopbookService){
    _topBooksService.getTopBooks().subscribe((data) => {
      this.books = data.data
    })
  }



  currentIndex = 0;
  visibleCards = 2; 

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
