import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/product.interface';


const route = 'http://localhost:3333/products';
const route2 = 'http://localhost:3333/categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listAllByCategory(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${route}/${id}`);
  }

  listAllCategoriesWithProds(id: number | string): Observable<Product[]> {
    return this.http.get<Product[]>(`${route2}/find-products/foodstore/${id}`);
  }

}
