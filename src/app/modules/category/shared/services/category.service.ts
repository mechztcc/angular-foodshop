import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../types/category.interface';


const route = 'http://localhost:3333/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  listAllByFoodstore(id: number | string): Observable<Category[]> {
    return this.http.get<Category[]>(`${route}/findByFoodstore/${id}`);
  }

}
