import { Component } from '@angular/core';
import { BlogData } from '../../interfaces/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blog!: BlogData[];
  constructor(private _blogservice:BlogService){
    _blogservice.getBlog().subscribe((data) => {
      this.blog = data.data;
      console.log(this.blog);
      
    })
  }
}
