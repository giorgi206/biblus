import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBestsellers } from '../interfaces/bestsellers.model';
import { IPage } from '../interfaces/page.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private _http: HttpClient) {}

  booksNotice(getID:any) {
    return this._http.get(`https://apiv1.biblusi.ge/api/book/${getID}`)
    
  }
}