import { Component } from '@angular/core';
import { NewData } from '../../interfaces/new.model';
import { NewbookService } from '../../services/newbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrl: './new-books.component.css'
})
export class NewBooksComponent {
  
  newBooks!: NewData[];
  constructor(private _newBooksService:NewbookService, private route:Router){
    _newBooksService.getNewBooks().subscribe((data) => {
      this.newBooks = data.data
      console.log(this.newBooks);
      
      
    })
  }

  
  
  currentIndex = 0;
  visibleCards = 5; 

  next() {
    if (this.currentIndex + this.visibleCards < this.newBooks.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
