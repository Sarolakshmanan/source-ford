import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  post_details(data: any) {
    return this.http.post<any>(
      `${environment.serverConnection}/admin/registration-public`,
      data
    );
  }
}
