import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  constructor(
    private _layout: LayoutService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('404 - Not Found');
  }

  ngOnInit(): void {
    this.setModePage();
  }

  setModePage() {
    this._layout.setNotFoundPage(true);
  }

  settingBack404() {
    this._layout.setNotFoundPage(false);
    this.router.navigate(['/home/dashboard']);
  }
}
