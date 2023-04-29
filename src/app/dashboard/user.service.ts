import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<any> {
    return this.httpClient
      .get('https://reqres.in/api/users?page=1&per_page=11')
      .pipe(map((r: any) => r.data));
  }

  createUser(first_name: string, last_name: string): Observable<any> {
    return this.httpClient.post('https://reqres.in/api/users', {
      name: first_name + last_name,
      job: 'leader',
    });
  }
}
