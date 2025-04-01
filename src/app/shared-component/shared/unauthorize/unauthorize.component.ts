import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.component.html',
  styleUrls: ['./unauthorize.component.scss'],
})
export class UnauthorizeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private route: Router,
    private routerDetails: ActivatedRoute,
    private _layout: LayoutService
  ) {
    this.titleService.setTitle('403 - Unauthorize');
  }

  ngOnInit(): void {
    this.screenPrivacy();
  }

  screenPrivacy() {
    this.routerDetails.data.subscribe((items) => {
      this._layout.screenPrivay = 'private';
      this._layout.setNotFoundPage(false);
    });
  }

  moveDashboard() {
    this.route.navigate(['/home/dashboard']);
  }
}
