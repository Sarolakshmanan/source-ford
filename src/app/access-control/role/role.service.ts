import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  get_details() {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(
      `${environment.serverConnection}/admin/roles-list?mode=Role Config`,
      {
        headers: headers,
      }
    );
  }

  post_details(data: any, node_info: any) {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    data['role_summary'] = node_info;
    return this.http.post<any>(
      `${environment.serverConnection}/admin/roles-list`,
      data,
      {
        headers: headers,
      }
    );
  }

  put_details(data: any, id: any, nodeInfo: any) {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    data['role_summary'] = nodeInfo;
    return this.http.put<any>(
      `${environment.serverConnection}/admin/roles-list/${id}`,
      data,
      {
        headers: headers,
      }
    );
  }
}
