import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../interfaces/bannerCarousel.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  bannerCarouselApi: string = "https://apiv1.biblusi.ge/api/slider"
  constructor(private _http:HttpClient) { }
  getBannerCarousel(){
    return this._http.get<Banner>(this.bannerCarouselApi)
  }
}
