import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './types/user.interface';


const route = 'http://localhost:3333'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createAccount(user: User): Observable<User> {
    return this.http.post<User>(`${route}/users/create`, user);
  }
}
