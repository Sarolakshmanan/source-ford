import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { isTimeValidByConfig } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-return-products',
  templateUrl: './return-products.component.html',
  styleUrls: ['./return-products.component.scss']
})
export class ReturnProductsComponent implements OnInit {

  searchText: any;
  toggleEventCreate: boolean = false;
  listOfColumn: any = [
    'Action',
    'S.No',
    'Item Code',
    'Reason',
    'Damaged Products',
  ];
  data = [{
    name: '',
    reason: '',
    damaged: []
  }];
  currentDate: any = '';
  currentTime: any = '';
  selectedProduct: any = [];
  listOfOption: any = ['Keyboard', 'Mouse', 'Monitor',];
  listOfSelectedValue: any = [];
  username: string = '';
  @ViewChild('itemCodeInput') itemCodeInput: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    const jobOrderNoInput = document.getElementById('item_code') as HTMLInputElement;
    jobOrderNoInput.focus();
  }

  ngAfterViewInit() {
    this.focusItemCodeInput();
  }

  focusItemCodeInput() {
    if (this.itemCodeInput) {
      this.itemCodeInput.nativeElement.focus();
    }
  }

  onSelectionChange(selectedValues: string[]) {
    if (selectedValues.length > 5) {
      // Keep only the first 5 selections
      this.listOfSelectedValue = selectedValues.slice(0, 5);
    } else {
      this.listOfSelectedValue = selectedValues;
    }
  }

  addRow() {
    const newRow = {
      name: '',
      reason: '',
      damaged: []
    };
    this.data.push(newRow);
  }

  deleteRow(index: number) {
    this.data.splice(index, 1);
  }

}
