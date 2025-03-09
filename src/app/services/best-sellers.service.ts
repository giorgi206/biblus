import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBestsellers } from '../interfaces/bestsellers.model';

@Injectable({
  providedIn: 'root'
})
export class BestSellersService {
  bestsellersApi: string = "https://apiv1.biblusi.ge/api/book?best=1&author=1&rate=1&category=1";
  constructor(private _http:HttpClient) { }
  getBestsellersCard(){
    return this._http.get<IBestsellers>(this.bestsellersApi);
  }
}
