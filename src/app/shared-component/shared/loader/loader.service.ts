import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderComponent } from './loader.component';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  //scope
  loaderStatus = new Subject<any>();
  constructor() {}

  startLoading() {
    this.loaderStatus.next({ status: 'success', value: true });
  }

  stopLoading() {
    this.loaderStatus.next({ status: 'success', value: false });
  }

  retrieveStatusLoader() {
    return this.loaderStatus.asObservable();
  }
}
