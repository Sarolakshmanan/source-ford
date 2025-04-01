import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  screenPrivacy: any;
  constructor(private http: HttpClient) {}

  //scope
  isCollapsed: boolean = false;
  apiConnection: boolean = true;
  profilePicture: any;
  pageNotFoundMode: boolean = false;
  pageNotFound = new Subject<any>();
  screenPrivay: string = 'public';
  UserInfo: any = {};
  isLoggedIn$ = new Subject<any>();

  getToggleStatus() {
    return this.isCollapsed;
  }

  retrieveDb(db: any, name: string) {
    let userInfo: any;
    db.get('token_access')
      .then(function (doc: any) {
        userInfo = doc;
      })
      .catch(function (err: any) {
        // error
      });
    return userInfo;
  }

  togglingSlider() {
    this.isCollapsed = !this.isCollapsed;
    return this.isCollapsed;
  }

  setNotFoundPage(modeValue: boolean) {
    this.pageNotFoundMode = modeValue;
    this.pageNotFound.next({
      status: 'success',
      value: this.pageNotFoundMode,
      layout: this.screenPrivay,
    });
  }

  getModePagenotFound() {
    return this.pageNotFound.asObservable();
  }

  setPageInfo(isLoggedIn: boolean) {
    this.isLoggedIn$.next(isLoggedIn);
  }

  gatherLoggedInInfo() {
    return this.isLoggedIn$.asObservable();
  }
  
  sideMenuDressUp(parent : string) {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(`${environment.serverConnection}/others/menu-list?parent=${parent}`, {
      headers: headers,
    });
  }

  menuDressUp() {
    let headers = new HttpHeaders({
      'content-type': 'Application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(`${environment.serverConnection}/others/menu-list`, {
      headers: headers,
    });
  }
}
