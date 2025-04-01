import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LastItemService {
  constructor(private http: HttpClient) {}

  get_details() {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(
      `${environment.serverConnection}/admin/user-list?mode=User Details`,
      {
        headers: headers,
      }
    );
  }

  post_details(data: any) {
    data['screen'] = 'User Details';
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(
      `${environment.serverConnection}/admin/user-list`,
      data,
      {
        headers: headers,
      }
    );
  }

  put_details(data: any, id: any) {
    data['screen'] = 'User Details';
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(
      `${environment.serverConnection}/admin/user-list/${id}`,
      data,
      {
        headers: headers,
      }
    );
  }
}
