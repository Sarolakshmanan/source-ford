import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  private selectedProductSource = new BehaviorSubject<any>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  setSelectedProduct(product: any) {
    this.selectedProductSource.next(product);
  }
}
