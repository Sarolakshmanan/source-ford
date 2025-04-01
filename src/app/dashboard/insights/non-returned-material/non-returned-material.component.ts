import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-returned-material',
  templateUrl: './non-returned-material.component.html',
  styleUrls: ['./non-returned-material.component.scss'],
})
export class NonReturnedMaterialComponent implements OnInit {
  data: any = [];
  constructor() {}

  ngOnInit(): void {}
}
