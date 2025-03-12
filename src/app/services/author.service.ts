import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iauthor } from '../interfaces/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http:HttpClient) { }

  authorsApi: string = "https://apiv1.biblusi.ge/api/author?book=1&random=1";
  getAuthors(){
    return this._http.get<Iauthor>(this.authorsApi)
  }

}
