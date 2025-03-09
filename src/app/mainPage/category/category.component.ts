import { Component } from '@angular/core';
import { Category } from '../../interfaces/productCategory.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category!: Category[];
  constructor(private _categoryService:CategoryService){
    _categoryService.getCategory().subscribe((data:any) => {
      this.category = data
      console.log(this.category);
      this.deleteItem();
    })
  }
  deleteItem(){
    if (this.category.length > 0) {
      this.category.splice(11 , 1);
      this.category.splice(10 , 1);
      this.category.splice(9 , 1);
      this.category.splice(8 , 1);
      this.category.splice(7 , 1);
      this.category.splice(6 , 1);
      this.category.splice(4 , 1);
      this.category.splice( 3, 1);
   }
  }
}
