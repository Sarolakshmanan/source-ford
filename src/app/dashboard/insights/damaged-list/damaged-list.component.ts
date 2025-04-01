import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damaged-list',
  templateUrl: './damaged-list.component.html',
  styleUrls: ['./damaged-list.component.scss'],
})
export class DamagedListComponent implements OnInit {
  data: any = [];
  constructor() {}

  ngOnInit(): void {}
}
