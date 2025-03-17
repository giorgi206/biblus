import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './mainPage/home-page/home-page.component';
import { BookDetailsComponent } from './routes/book-details/book-details.component';
import { RoutesPageComponent } from './routes/routes-page/routes-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "routes", component: RoutesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
