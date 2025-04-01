import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  logoutTrigger = new Subject();

  constructor(private http: HttpClient) {}

  logoutConfirm() {
    this.logoutTrigger.next({ status: 'success' });
  }

  popRemover() {
    return this.logoutTrigger.asObservable();
  }

  do_pin(data: any) {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
    });
    return this.http.get<any>(
      `${environment.serverConnection}/auth/otp-verify?otp=${data.otp}&load_id=${data.load_id}&env=${data.environment}`,
      {
        headers: headers,
      }
    );
  }
}
