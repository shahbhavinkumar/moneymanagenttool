import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { CategoryModel } from '../../model/category.model';
@Component({
  selector: 'app-savings-detail',
  templateUrl: './savings-detail.component.html',
  styleUrls: ['./savings-detail.component.css']
})
export class SavingsDetailComponent implements OnInit {
  category: CategoryModel;
  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      () => {
        this.getCategory();
      })
  }


  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(c => this.category = c);
  }

}