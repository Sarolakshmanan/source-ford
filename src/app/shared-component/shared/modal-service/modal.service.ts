import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  show = new Subject();

  constructor() {}

  popup(data: any) {
    this.show.next({ data: data });
  }

  popupStatus() {
    return this.show.asObservable();
  }
}
