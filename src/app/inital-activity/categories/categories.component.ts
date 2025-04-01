import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from './categories.service';
import { isTimeValidByConfig } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  searchText: any;
  toggleEventCreate: boolean = false;
  isEdit: boolean = false;
  currentDate: any = '';
  currentTime: any = '';
  isproduct = false;
  isReturn = false;
  isTable = false;
  selectedProduct: any = [];
  quantity = 1;
  categories = [
    { name: 'All Menu', item_value: 50 }, { name: 'OEE', item_value: 10 }, { name: 'CMMS', item_value: 25 },
    { name: 'EMS', item_value: 8 }, { name: 'CBM', item_value: 7 }, { name: 'CBM', item_value: 7 }
  ];
  products = [
    { image: 'assets/system_image/mouse.png', name: 'OEE', category: 'Software', description: 'Equipment Monitoring System.', price: 4.00 },
    { image: 'assets/system_image/mouse.png', name: 'CMMS', category: 'Software', description: 'Computerized Maintenance Monitoring System.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'EMS', category: 'Software', description: 'Energy Monitoring System.', price: 8.00 },
    { image: 'assets/system_image/mouse.png', name: 'CBM', category: 'Software', description: 'Condition Based Monitoring.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'OEE', category: 'Software', description: 'Equipment Monitoring System.', price: 4.00 },
    { image: 'assets/system_image/mouse.png', name: 'CMMS', category: 'Software', description: 'Computerized Maintenance Monitoring System.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'EMS', category: 'Software', description: 'Energy Monitoring System.', price: 8.00 },
    { image: 'assets/system_image/mouse.png', name: 'CBM', category: 'Software', description: 'Condition Based Monitoring.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'OEE', category: 'Software', description: 'Equipment Monitoring System.', price: 4.00 },
    { image: 'assets/system_image/mouse.png', name: 'CMMS', category: 'Software', description: 'Computerized Maintenance Monitoring System.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'EMS', category: 'Software', description: 'Energy Monitoring System.', price: 8.00 },
    { image: 'assets/system_image/mouse.png', name: 'CBM', category: 'Software', description: 'Condition Based Monitoring.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'OEE', category: 'Software', description: 'Equipment Monitoring System.', price: 4.00 },
    { image: 'assets/system_image/mouse.png', name: 'CMMS', category: 'Software', description: 'Computerized Maintenance Monitoring System.', price: 6.00 },
    { image: 'assets/system_image/mouse.png', name: 'EMS', category: 'Software', description: 'Energy Monitoring System.', price: 8.00 },
    { image: 'assets/system_image/mouse.png', name: 'CBM', category: 'Software', description: 'Condition Based Monitoring.', price: 6.00 },
  ];

  constructor(private cdr: ChangeDetectorRef, private router: Router, private __service: CategoriesService) { }

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
    this.currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  range(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  showModalMiddle(product: any) {
    this.selectedProduct = product;
    this.quantity = 1;
    setTimeout(() => {
      this.cdr.detectChanges();
      this.isproduct = true;
    }, 200);
  }

  handleCancel(data: any) {
    if (data == 'return') {
      this.isReturn = false;
    } else if (data == 'product') {
      this.isproduct = false;
    } else if (data == 'table') {
      this.isTable = false;
    }
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: any) {
    this.isproduct = false;
    this.__service.setSelectedProduct(product);
  }

  showLogin() {
    this.router.navigate(['/login']);
  }

  showModal() {
    this.isTable = true;
    setTimeout(() => {
      const jobOrderNoInput = document.getElementById('item_code') as HTMLInputElement;
      jobOrderNoInput.focus();
    }, 200);
  }

  onModalVisibleChange() {
    if (this.isTable) {
      this.showModal();
    }
  }

}
