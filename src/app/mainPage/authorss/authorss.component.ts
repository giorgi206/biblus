import { Component } from '@angular/core';
import { AuthorData } from '../../interfaces/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-authorss',
  templateUrl: './authorss.component.html',
  styleUrl: './authorss.component.css'
})
export class AuthorssComponent {
  authors!: AuthorData[];
  constructor(private _authorsService:AuthorService){
    _authorsService.getAuthors().subscribe((data) => {
      this.authors = data.data;
    })
  }

  currentIndex = 0;
  visibleCards = 2; 

  next() {
    if (this.currentIndex + this.visibleCards < this.authors.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
