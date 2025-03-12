import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itop } from '../interfaces/top.model';

@Injectable({
  providedIn: 'root'
})
export class TopbookService {

  constructor(private _http:HttpClient) { }

  topBookApi: string = "https://apiv1.biblusi.ge/api/book?block=1&author=1&category=1";
  getTopBooks(){
    return this._http.get<Itop>(this.topBookApi);
  }
}
