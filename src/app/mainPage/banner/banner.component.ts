import { Component } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { Banner } from '../../interfaces/bannerCarousel.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  bannerCarousel!: Banner[]
  constructor(private _bannerService:BannerService){
    _bannerService.getBannerCarousel().subscribe((data:any) => {
      this.bannerCarousel = data.slice(0, 10);  
    })
  }
}
