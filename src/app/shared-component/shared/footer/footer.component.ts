import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  //scope
  zone: any;
  @Input() factoryList: any = [];
  factorLable: any = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.factorLable = this.factoryList;
    this.zone = localStorage.getItem('zone');
  }

  documentation() {
    window.open(
      `http://${environment.ipAddress}:8081/manual/GettingStarted.html`
    );
  }
}
