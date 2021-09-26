import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  // getUsers(): Observable<any> {
  //   const url = `${environment.baseUrl}/users`
  //   return this.http.get(url, { observe: 'response' })
  //     .pipe(
  //       map(res => res.body)
  //     );
  // }

  getUsers(): Observable<any> {
    const url = `${environment.baseUrl}/users`
    return this.http.get(url);
  }

  createUser(data: any): Observable<any> {
    const url = `${environment.baseUrl}/user`
    return this.http.post(url, data);
  }

}
