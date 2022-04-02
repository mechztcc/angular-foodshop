import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/types/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  isLoading: boolean = false;
  id: string | number;

  products: Product[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.listAll();
  }

  listAll() {
    this.isLoading = true;
    this.productService.listAllCategoriesWithProds(this.id)
      .subscribe((data: Product[]) => {
        this.products = data;
        console.log(data);
        
      }).add(() => {
        this.isLoading = false;
      });

  }

}
