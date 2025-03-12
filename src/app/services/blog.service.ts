import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iblog } from '../interfaces/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http:HttpClient) { }
  blogApi: string = "https://apiv1.biblusi.ge/api/blog?limit=6";
  getBlog(){
    return this._http.get<Iblog>(this.blogApi);
  }
}
