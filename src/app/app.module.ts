import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './allComponents/nav-bar/nav-bar.component';
import { HomePageComponent } from './mainPage/home-page/home-page.component';
import { BannerComponent } from './mainPage/banner/banner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './mainPage/category/category.component';
import { BestsellersCarouselComponent } from './mainPage/bestsellers-carousel/bestsellers-carousel.component';
import { OffersComponent } from './mainPage/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BannerComponent,
    CategoryComponent,
    BestsellersCarouselComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
