import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  //scope
  tabInfoOpen = new Subject<any>();
  constructor() {}

  modeOpen(node: any) {
    this.tabInfoOpen.next({ status: 'success', data: node });
  }

  openTabStatus() {
    return this.tabInfoOpen.asObservable();
  }
}
