import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from './shared-component/shared/service/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _layout: LayoutService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
