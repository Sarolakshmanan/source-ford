import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  items: any[] = [];
  selectedProduct: any = [];
  quantity = 1;

  constructor(private _service: CategoriesService) { }

  ngOnInit(): void {
    this.callService();
  }

  callService() {
    this._service.selectedProduct$.subscribe((product) => {
      if (product) {
        this.selectedProduct.push({ ...product, quantity: this.quantity });
      }
    });
    console.log(this.selectedProduct);}

  increaseQty() {
    this.selectedProduct.quantity++;
  }

  decreaseQty() {
    if (this.selectedProduct.quantity > 1) {
      this.selectedProduct.quantity--;
    }
  }

}
