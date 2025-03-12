import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inews } from '../interfaces/new.model';

@Injectable({
  providedIn: 'root'
})
export class NewbookService {

  constructor(private _http:HttpClient) { }

  newBooksApi: string = "https://apiv1.biblusi.ge/api/book?author=1&rate=1&category=1";

  getNewBooks(){
    return this._http.get<Inews>(this.newBooksApi);
  }

}
