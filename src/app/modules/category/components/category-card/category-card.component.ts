import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from '../../shared/types/category.interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  isLoading: boolean = false;
  id: number | string;

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.listAll();
  }

  listAll() {
    this.isLoading = true;
    this.categoryService
      .listAllByFoodstore(this.id)
      .subscribe((data: Category[]) => {
        this.categories = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
