import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInteresting } from '../interfaces/interestingBooks.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor(private _http:HttpClient) { }
  booksApi: string = '';
  getBooks(id: number) {
    this.booksApi = `https://apiv1.biblusi.ge/api/book?category_id=${id}&per_page=20&category=1&except=22010&author=1`;
    return this._http.get<IInteresting>(this.booksApi);
  }
}
