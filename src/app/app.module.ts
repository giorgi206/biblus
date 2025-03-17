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
import { NewBooksComponent } from './mainPage/new-books/new-books.component';
import { TopBooksComponent } from './mainPage/top-books/top-books.component';
import { BlogsComponent } from './mainPage/blogs/blogs.component';
import { AuthorssComponent } from './mainPage/authorss/authorss.component';
import { ReadNowComponent } from './mainPage/read-now/read-now.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { BookDetailsComponent } from './routes/book-details/book-details.component';
import { RoutesPageComponent } from './routes/routes-page/routes-page.component';
import { FormsModule } from '@angular/forms';
import { AssessmentComponent } from './routes/assessment/assessment.component';
import { RouteBestSellersComponent } from './routes/route-best-sellers/route-best-sellers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BannerComponent,
    CategoryComponent,
    BestsellersCarouselComponent,
    OffersComponent,
    NewBooksComponent,
    TopBooksComponent,
    BlogsComponent,
    AuthorssComponent,
    ReadNowComponent,
    FooterComponent,
    BookDetailsComponent,
    RoutesPageComponent,
    AssessmentComponent,
    RouteBestSellersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
