import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  do_login(data: any) {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
    });
    return this.http.get<any>(
      `${environment.serverConnection}/auth/login?username=${data.email}&password=${data.password}&mode=web`,
      {
        headers: headers,
      }
    );
  }
}
