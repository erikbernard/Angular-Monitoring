import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Page } from 'src/app/users/models/page.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private http: HttpClient,
  ) { }

  parameters(page: Page): {} {
    return page.filter.name.length > 0 ? {
      name: page.filter.name
    } : {
      _page: page.page,
      _limit: page.limit,
    };
  }

  public getAllUsers(page: Page): Observable<User[]>  {
    return this.http.get<User[]> (
    `${environment.API}/users/`, {
      params: this.parameters(page)
    }
    ).pipe(first());
  }

  public registerUser(user: User): Observable<any>  {
    return this.http.post(`${environment.API}/users/`, user).pipe(first());
  }

  public editUser(id: string, user: User): Observable<any>  {
    return this.http.put(`${environment.API}/users/${id}`, user).pipe(first());
  }

  public removeUserById(id: string): Observable<any>  {
    return this.http.delete(`${environment.API}/users/${id}`).pipe(first());
  }
}