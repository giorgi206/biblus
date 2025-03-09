import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryApi: string = "https://apiv1.biblusi.ge/api/category";
  constructor(private _http:HttpClient) { }
  getCategory(){
    return this._http.get<Category>(this.categoryApi);
  }
}
