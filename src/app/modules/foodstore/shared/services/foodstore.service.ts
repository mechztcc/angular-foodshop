import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodstore } from '../types/foodstore.interface';


const route = 'http://localhost:3333/foodstore';

@Injectable({
  providedIn: 'root'
})
export class FoodstoreService {

  constructor(private http: HttpClient) { }

  findAllByUser(): Observable<Foodstore[]> {
    return this.http.get<Foodstore[]>(`${route}/list-all-by-user`);
  }

  create(foodstore: Foodstore): Observable<Foodstore> {
    return this.http.post<Foodstore>(`${route}/create`, foodstore);
  }

}
